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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body.recaptchaToken && !(await verifyRecaptcha(body.recaptchaToken))) {
      return NextResponse.json({ ok: false, error: 'CAPTCHA verification failed' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const isMaster = Boolean(body.company);
    const subject = isMaster
      ? `Master Agreement Request: ${body.company} (${body.name})`
      : `Contact: ${body.subject || 'General inquiry'} — ${body.name}`;

    const rows = Object.entries(body)
      .filter(([, v]) => v)
      .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:600;color:#4a4a4a;white-space:nowrap;background:#f8fafc">${k}</td><td style="padding:6px 12px">${v}</td></tr>`)
      .join('');

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px">
        <h2 style="color:#2d9d78">${subject}</h2>
        <table style="border-collapse:collapse;width:100%;font-size:15px">${rows}</table>
        <hr style="margin:30px 0;border:none;border-top:1px solid #e5e7eb">
        <p style="color:#6b7280;font-size:13px">Submitted via clrblt.com</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"CLRBLT" <${process.env.EMAIL_USER}>`,
      to: 'john@clrblt.com',
      replyTo: body.email,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact email error:', error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
