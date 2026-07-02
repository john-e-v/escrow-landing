import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';
import { withDb } from '@/lib/db-optional';
import { buildPropertySlug } from '@/lib/property';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, streetAddress, city, state, projectType, budget, zip, description } = await request.json();

    if (!name || !email || !phone || !streetAddress || !city || !state || !zip || !projectType || !budget || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Email the full submission now — the Stripe checkout session only
    // survives with a limited, truncated metadata payload, so this is the
    // system of record for the actual project details.
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      });

      const html = `
        <div style="font-family:Arial,sans-serif;max-width:600px">
          <h2 style="color:#2d9d78">New Project Submission</h2>
          <table style="border-collapse:collapse;width:100%;font-size:15px">
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Name</td><td style="padding:8px 12px">${name}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Email</td><td style="padding:8px 12px">${email}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Phone</td><td style="padding:8px 12px">${phone}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Address</td><td style="padding:8px 12px">${streetAddress}, ${city}, ${state} ${zip}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Project Type</td><td style="padding:8px 12px">${projectType}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Budget</td><td style="padding:8px 12px">${budget}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Description</td><td style="padding:8px 12px">${description}</td></tr>
          </table>
          <p style="margin-top:24px;background:#fef3c7;padding:14px;border-radius:8px;color:#92400e">
            Sent when the homeowner submitted the form and was redirected to Stripe checkout.
            A follow-up email confirms once the $9 payment actually completes.
          </p>
        </div>
      `;

      await transporter.sendMail({
        from: `"CLRBLT" <${process.env.EMAIL_USER}>`,
        to: 'john@clrblt.com',
        replyTo: email,
        subject: `New Project Submission — ${name} (${projectType}) in ${zip}`,
        html,
      });
    } catch (emailErr) {
      // Don't block checkout on email failure, but make sure it's visible in logs.
      console.error('Project submission email failed:', emailErr);
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
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
      metadata: {
        name,
        email,
        phone,
        streetAddress,
        city,
        state,
        zip,
        projectType,
        budget,
        description: description.slice(0, 490),
      },
      success_url: `${request.nextUrl.origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/create`,
    });

    // Persist the submission so it's a queryable, editable record rather
    // than living only in the email above. Also upserts a Property for the
    // submitted address and marks the submitter as a pending owner, so
    // every project submission gets an address-specific page. No-ops until
    // Postgres is attached.
    await withDb(async (db) => {
      const slug = buildPropertySlug({ streetAddress, city, state, zip });

      const property = await db.property.upsert({
        where: { slug },
        update: {},
        create: { slug, streetAddress, city, state, zip, dataSource: 'manual' },
      });

      await db.propertyOwner.upsert({
        where: { propertyId_email: { propertyId: property.id, email } },
        update: { name },
        create: { propertyId: property.id, email, name },
      });

      return db.submission.create({
        data: {
          name, email, phone, streetAddress, city, state, zip, projectType, budget, description,
          stripeSessionId: session.id,
          propertyId: property.id,
        },
      });
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
