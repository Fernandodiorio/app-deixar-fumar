'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Heart, Sparkles } from 'lucide-react';

export default function CheckoutSuccessPage() {
  const { user, refreshUser } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyPayment = async () => {
      if (!sessionId) {
        router.push('/checkout');
        return;
      }

      try {
        // Verificar o pagamento
        const response = await fetch(`/api/verify-session?session_id=${sessionId}`);
        
        if (response.ok) {
          // Atualizar o usuário para pegar o status premium
          await refreshUser();
        }
      } catch (error) {
        console.error('Erro ao verificar pagamento:', error);
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [sessionId, router, refreshUser]);

  const handleGoToDashboard = () => {
    router.push('/dashboard');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">A verificar pagamento...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center">
        <CardContent className="pt-8 pb-8">
          <div className="mx-auto mb-6 w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Pagamento Bem-Sucedido! 🎉
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Bem-vindo ao RespiraPT Premium! Agora tens acesso completo a todas as funcionalidades.
          </p>

          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg p-4 mb-6 text-white">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Premium Ativado</span>
            </div>
            <p className="text-sm text-teal-50">
              O teu plano premium está ativo e pronto para usar!
            </p>
          </div>

          <Button
            onClick={handleGoToDashboard}
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium py-6 text-lg"
          >
            <Heart className="w-5 h-5 mr-2" />
            Começar a Usar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
