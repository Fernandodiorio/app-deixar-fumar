import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabase } from '@/lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(request: NextRequest) {
  try {
    const { userId, userEmail, priceId } = await request.json();

    if (!userId || !userEmail) {
      return NextResponse.json(
        { error: 'userId e userEmail são obrigatórios' },
        { status: 400 }
      );
    }

    // Preço padrão se não especificado (você pode criar no Stripe Dashboard)
    const finalPriceId = priceId || process.env.STRIPE_PRICE_ID || 'price_default';

    // Criar sessão de checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: finalPriceId,
          quantity: 1,
        },
      ],
      mode: 'subscription', // ou 'payment' para pagamento único
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/checkout?canceled=true`,
      customer_email: userEmail,
      client_reference_id: userId, // Para identificar o usuário no webhook
      metadata: {
        userId: userId,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error: any) {
    console.error('Erro ao criar sessão de checkout:', error);
    return NextResponse.json(
      { error: error.message || 'Erro ao criar sessão de checkout' },
      { status: 500 }
    );
  }
}
