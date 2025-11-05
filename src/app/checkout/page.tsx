'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, CreditCard, CheckCircle2, Shield, Lock, Sparkles } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

// Inicializar Stripe (vai usar a chave pública do env)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export default function CheckoutPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const priceId = searchParams.get('price_id') || 'price_default'; // Default price ID

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/auth/login');
    } else if (!authLoading && user && user.premium) {
      // Se já tem premium, ir direto para dashboard
      router.push('/dashboard');
    }
  }, [user, authLoading, router]);

  const handleCheckout = async () => {
    if (!user) {
      setError('Por favor, faça login primeiro.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Criar sessão de checkout no backend
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          userEmail: user.email,
          priceId: priceId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao criar sessão de checkout');
      }

      // Redirecionar para Stripe Checkout
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe não inicializado');
      }

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }
    } catch (err: any) {
      console.error('Checkout error:', err);
      setError(err.message || 'Erro ao processar pagamento. Tente novamente.');
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">A carregar...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            RespiraPT Premium
          </h1>
          <p className="text-teal-600 dark:text-teal-400 font-medium">
            Desbloqueia todo o potencial da tua jornada
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Plano Premium */}
          <Card className="border-2 border-teal-500 shadow-xl">
            <CardHeader className="text-center">
              <div className="mx-auto mb-2 w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Plano Premium</CardTitle>
              <CardDescription className="text-lg mt-2">
                Acesso completo a todas as funcionalidades
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Preço */}
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 dark:text-white">
                  €9,99
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-1">
                  por mês
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Tarefas ilimitadas</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Acesso a todas as micro-tarefas diárias</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Estatísticas avançadas</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Acompanha o teu progresso detalhado</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Suporte prioritário</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Ajuda quando mais precisas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Comunidade exclusiva</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Conecta com outros membros</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Conteúdo exclusivo</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Dicas e guias avançados</p>
                  </div>
                </div>
              </div>

              {/* Botão de Checkout */}
              <Button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium py-6 text-lg"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    A processar...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5 mr-2" />
                    Começar Agora
                  </>
                )}
              </Button>

              {error && (
                <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                </div>
              )}

              {/* Segurança */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Lock className="w-4 h-4" />
                <span>Pagamento 100% seguro</span>
                <Shield className="w-4 h-4 ml-2" />
              </div>
            </CardContent>
          </Card>

          {/* Porquê Premium */}
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Porquê escolher Premium?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  🎯 Resultados Comprovados
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Utilizadores Premium têm 3x mais probabilidade de sucesso na sua jornada.
                </p>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  💪 Apoio Constante
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Acesso a recursos e suporte quando mais precisas, 24/7.
                </p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  📈 Acompanhamento Detalhado
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Visualiza o teu progresso com estatísticas avançadas e insights.
                </p>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  🔒 Garantia de Reembolso
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Não ficaste satisfeito? Reembolso completo nos primeiros 30 dias.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
