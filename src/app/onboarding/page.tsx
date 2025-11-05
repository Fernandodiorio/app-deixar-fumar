'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { supabase } from '@/lib/supabase';
import { Heart, Cigarette, Target, Calendar } from 'lucide-react';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [cigarettesPerDay, setCigarettesPerDay] = useState('');
  const [goal, setGoal] = useState<'stop' | 'reduce'>('stop');
  const [method, setMethod] = useState('');
  const { user, loading, refreshUser } = useAuth();
  const router = useRouter();

  // Redirecionar se não estiver autenticado ou já completou onboarding
  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/auth/login');
      } else if (user.onboarding_completed) {
        router.push('/dashboard');
      }
    }
  }, [user, loading, router]);

  const handleNext = () => {
    console.log('handleNext called, step:', step, 'method:', method);
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = async () => {
    console.log('handleComplete called', { user, cigarettesPerDay, goal, method });
    
    // Validar campos
    if (!cigarettesPerDay || parseInt(cigarettesPerDay) <= 0) {
      alert('Por favor, insira um número válido de cigarros por dia.');
      return;
    }

    if (!method) {
      alert('Por favor, escolha um método de abordagem.');
      return;
    }

    // Usar o user do estado ou buscar sessão
    let userId: string | null = null;
    let userEmail: string = '';
    let userName: string | null = null;

    if (user?.id) {
      // Se temos o user no estado, usar ele
      userId = user.id;
      userEmail = user.email || '';
      userName = user.name || null;
    } else {
      // Se não temos, tentar buscar da sessão
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError || !session?.user) {
        // Tentar refresh da sessão
        const { data: { session: refreshedSession }, error: refreshError } = await supabase.auth.refreshSession();
        
        if (refreshError || !refreshedSession?.user) {
          alert('Erro: Sessão não encontrada. Por favor, faça login novamente.');
          router.push('/auth/login');
          return;
        }
        
        userId = refreshedSession.user.id;
        userEmail = refreshedSession.user.email || '';
        userName = refreshedSession.user.user_metadata?.name || null;
      } else {
        userId = session.user.id;
        userEmail = session.user.email || '';
        userName = session.user.user_metadata?.name || null;
      }
    }

    if (!userId) {
      alert('Erro: ID do utilizador não encontrado. Por favor, faça login novamente.');
      router.push('/auth/login');
      return;
    }

    try {
      // Tentar buscar o perfil existente
      let { data: existingProfile, error: fetchError } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (fetchError && fetchError.code !== 'PGRST116') {
        console.error('Error fetching profile:', fetchError);
        // Continuar mesmo com erro, vamos tentar criar/atualizar
      }

      let result;
      
      if (existingProfile) {
        // Se existe, atualizar
        console.log('Updating existing user profile');
        const { data, error } = await supabase
          .from('users')
          .update({
            cigarettes_per_day: parseInt(cigarettesPerDay),
            goal,
            method,
            onboarding_completed: true,
          })
          .eq('id', userId)
          .select()
          .single();

        if (error) {
          console.error('Update error:', error);
          throw error;
        }
        result = data;
      } else {
        // Se não existe, criar com upsert (que funciona como insert ou update)
        console.log('Creating new user profile via upsert');
        const { data, error } = await supabase
          .from('users')
          .upsert({
            id: userId,
            email: userEmail,
            name: userName,
            cigarettes_per_day: parseInt(cigarettesPerDay),
            goal,
            method,
            onboarding_completed: true,
          }, {
            onConflict: 'id'
          })
          .select()
          .single();

        if (error) {
          console.error('Upsert error:', error);
          throw error;
        }
        result = data;
      }

      console.log('Onboarding completed successfully, redirecting...');
      
      // Atualizar o estado do auth
      try {
        await refreshUser();
      } catch (refreshError) {
        console.error('Error refreshing user:', refreshError);
        // Continuar mesmo se der erro no refresh
      }
      
      // Aguardar um pouco para garantir que tudo está atualizado
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Redirecionar para checkout/pagamento
      router.push('/checkout');
    } catch (error: any) {
      console.error('Error completing onboarding:', error);
      alert(`Erro ao completar o onboarding: ${error.message || 'Erro desconhecido'}. Por favor, tente novamente.`);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <Cigarette className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h2 className="text-xl font-semibold">Quantos cigarros fumas por dia?</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Ajuda-nos a criar um plano personalizado para ti.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cigarettes">Número de cigarros</Label>
              <Input
                id="cigarettes"
                type="number"
                value={cigarettesPerDay}
                onChange={(e) => setCigarettesPerDay(e.target.value)}
                placeholder="Ex: 20"
                min="1"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <Target className="w-12 h-12 mx-auto mb-4 text-teal-600" />
              <h2 className="text-xl font-semibold">Qual é o teu objetivo?</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Queremos ajudar-te a alcançar o que desejas.
              </p>
            </div>
            <RadioGroup value={goal} onValueChange={(value: 'stop' | 'reduce') => setGoal(value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="stop" id="stop" />
                <Label htmlFor="stop">Parar completamente de fumar</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="reduce" id="reduce" />
                <Label htmlFor="reduce">Reduzir gradualmente</Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h2 className="text-xl font-semibold">Como preferes abordar a mudança?</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Escolhe o método que mais se adapta a ti.
              </p>
            </div>
            <RadioGroup 
              value={method} 
              onValueChange={(value) => {
                console.log('Method changed to:', value);
                setMethod(value);
              }}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cold-turkey" id="cold-turkey" />
                <Label htmlFor="cold-turkey" className="cursor-pointer">Parar de repente (método abrupto)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="gradual" id="gradual" />
                <Label htmlFor="gradual" className="cursor-pointer">Redução gradual</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nicotine-replacement" id="nicotine-replacement" />
                <Label htmlFor="nicotine-replacement" className="cursor-pointer">Substituição de nicotina</Label>
              </div>
            </RadioGroup>
            {method && (
              <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                ✓ Método selecionado: {method === 'cold-turkey' ? 'Parar de repente' : method === 'gradual' ? 'Redução gradual' : 'Substituição de nicotina'}
              </p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  // Mostrar loading enquanto verifica autenticação
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">A carregar...</p>
        </div>
      </div>
    );
  }

  // Não renderizar se não houver usuário (será redirecionado)
  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            RespiraPT
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300">
            Vamos configurar o teu plano personalizado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex justify-center space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i <= step ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {renderStep()}

          <div className="mt-6">
            <Button
              onClick={(e) => {
                e.preventDefault();
                console.log('Button clicked, step:', step, 'method:', method, 'cigarettesPerDay:', cigarettesPerDay);
                handleNext();
              }}
              className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                (step === 1 && !cigarettesPerDay) ||
                (step === 3 && !method)
              }
            >
              {step === 3 ? 'Começar!' : 'Próximo'}
            </Button>
            {step === 3 && !method && (
              <p className="text-sm text-red-600 dark:text-red-400 mt-2 text-center">
                Por favor, selecione um método para continuar
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}