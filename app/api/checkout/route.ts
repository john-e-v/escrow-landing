import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { name, email, projectType, budget, zip } = await request.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email || undefined,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Project Submission — Contractor Matching',
              description: `${projectType?.replace('_', ' ')} · ${budget?.replace('_', ' ')} · ${zip}`,
            },
            unit_amount: 900, // $9.00
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      metadata: { name: name || '', zip: zip || '', projectType: projectType || '' },
      success_url: `${request.nextUrl.origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/create`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
