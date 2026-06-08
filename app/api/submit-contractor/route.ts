import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

async function verifyRecaptcha(token: string) {
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, zip, services, recaptchaToken } = body;

    if (!name || !company || !email || !phone || !zip || !services) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!recaptchaToken || !(await verifyRecaptcha(recaptchaToken))) {
      return NextResponse.json({ error: 'CAPTCHA verification failed' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const adminHTML = `
      <div style="font-family:Arial,sans-serif;max-width:600px">
        <h2 style="color:#f7c948">New Contractor Signup</h2>
        <table style="border-collapse:collapse;width:100%;font-size:15px">
          <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Name</td><td style="padding:8px 12px">${name}</td></tr>
          <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Company</td><td style="padding:8px 12px">${company}</td></tr>
          <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Email</td><td style="padding:8px 12px">${email}</td></tr>
          <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Phone</td><td style="padding:8px 12px">${phone}</td></tr>
          <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Service ZIP</td><td style="padding:8px 12px">${zip}</td></tr>
          <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Services</td><td style="padding:8px 12px">${services}</td></tr>
        </table>
        <p style="margin-top:24px;background:#fef3c7;padding:14px;border-radius:8px;color:#92400e">
          <strong>Next step:</strong> Add to contractor database for ${zip} area and send matching project leads.
        </p>
      </div>
    `;

    const contractorHTML = `
      <div style="font-family:Arial,sans-serif;max-width:600px">
        <h2 style="color:#2d9d78">Welcome to CLRBLT, ${name}!</h2>
        <p>You're now part of our network of contractors who accept escrow-protected payments.</p>
        <div style="background:#fef3c7;padding:20px;border-radius:8px;margin:20px 0;text-align:center">
          <strong style="color:#92400e">You'll receive free leads for projects in your area — no monthly fees, ever.</strong>
        </div>
        <h3>Your profile:</h3>
        <ul style="line-height:1.8">
          <li><strong>Company:</strong> ${company}</li>
          <li><strong>Service Area:</strong> ${zip}</li>
          <li><strong>Primary Service:</strong> ${services}</li>
        </ul>
        <h3>How it works:</h3>
        <ol style="line-height:1.8">
          <li>We send you leads when a project matches your service area</li>
          <li>You bid directly with the homeowner</li>
          <li>The homeowner funds escrow — you get paid as milestones are completed</li>
        </ol>
        <p>Questions? Email us at john@clrblt.com</p>
        <p>— The CLRBLT Team</p>
      </div>
    `;

    await Promise.all([
      transporter.sendMail({
        from: `"CLRBLT" <${process.env.EMAIL_USER}>`,
        to: 'john@clrblt.com',
        replyTo: email,
        subject: `New Contractor Signup — ${company} (${services}) in ${zip}`,
        html: adminHTML,
      }),
      transporter.sendMail({
        from: `"CLRBLT Team" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Welcome to CLRBLT — You're In!",
        html: contractorHTML,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contractor signup error:', error);
    return NextResponse.json({ error: 'Failed to complete signup' }, { status: 500 });
  }
}
