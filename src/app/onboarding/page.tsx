'use client';

import { useState } from 'react';
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
  const { user } = useAuth();
  const router = useRouter();

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = async () => {
    if (!user) return;

    if (!cigarettesPerDay || parseInt(cigarettesPerDay) <= 0) {
      alert('Por favor, insira um número válido de cigarros por dia.');
      return;
    }

    try {
      const { error } = await supabase
        .from('users')
        .update({
          cigarettes_per_day: parseInt(cigarettesPerDay),
          goal,
          method,
          onboarding_completed: true,
        })
        .eq('id', user.id);

      if (error) throw error;
      router.push('/dashboard');
    } catch (error: any) {
      console.error('Error completing onboarding:', error);
      alert('Erro ao completar o onboarding. Por favor, tente novamente.');
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
            <RadioGroup value={method} onValueChange={setMethod}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cold-turkey" id="cold-turkey" />
                <Label htmlFor="cold-turkey">Parar de repente (método abrupto)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="gradual" id="gradual" />
                <Label htmlFor="gradual">Redução gradual</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nicotine-replacement" id="nicotine-replacement" />
                <Label htmlFor="nicotine-replacement">Substituição de nicotina</Label>
              </div>
            </RadioGroup>
          </div>
        );

      default:
        return null;
    }
  };

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
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
              disabled={step === 1 && !cigarettesPerDay}
            >
              {step === 3 ? 'Começar!' : 'Próximo'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}