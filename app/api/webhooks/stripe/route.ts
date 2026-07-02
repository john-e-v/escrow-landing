import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';
import { withDb } from '@/lib/db-optional';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  const signature = request.headers.get('stripe-signature');
  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature!, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Invalid signature';
    console.error('Stripe webhook signature verification failed:', message);
    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const { name, email, phone, zip, projectType, budget, description } = session.metadata ?? {};

    await withDb((db) =>
      db.submission.updateMany({
        where: { stripeSessionId: session.id },
        data: { status: 'paid', amountPaidCents: session.amount_total ?? undefined },
      })
    );

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      });

      const html = `
        <div style="font-family:Arial,sans-serif;max-width:600px">
          <h2 style="color:#2d9d78">Payment Confirmed — Project Submission</h2>
          <table style="border-collapse:collapse;width:100%;font-size:15px">
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Name</td><td style="padding:8px 12px">${name ?? ''}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Email</td><td style="padding:8px 12px">${email ?? session.customer_details?.email ?? ''}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Phone</td><td style="padding:8px 12px">${phone ?? ''}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">ZIP</td><td style="padding:8px 12px">${zip ?? ''}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Project Type</td><td style="padding:8px 12px">${projectType ?? ''}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Budget</td><td style="padding:8px 12px">${budget ?? ''}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Description</td><td style="padding:8px 12px">${description ?? ''}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Amount Paid</td><td style="padding:8px 12px">$${((session.amount_total ?? 0) / 100).toFixed(2)}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Stripe Session</td><td style="padding:8px 12px">${session.id}</td></tr>
          </table>
        </div>
      `;

      await transporter.sendMail({
        from: `"CLRBLT" <${process.env.EMAIL_USER}>`,
        to: 'john@clrblt.com',
        subject: `Payment Confirmed — ${name ?? 'Project'} (${projectType ?? ''}) in ${zip ?? ''}`,
        html,
      });
    } catch (emailErr) {
      console.error('Payment confirmation email failed:', emailErr);
    }
  }

  return NextResponse.json({ received: true });
}
