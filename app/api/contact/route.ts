import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      company,
      phone,
      address,
      workType,
      monthlyPlan,
      integration,
      additionalInfo
    } = body;

    // Basic validation
    if (!name || !email || !company || !address || !workType || !monthlyPlan || !integration) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email transporter (using Gmail as example)
    // You'll need to set up environment variables
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    });

    // Email content
    const emailContent = `
New Master Service Agreement Request

Contact Information:
- Name: ${name}
- Email: ${email}
- Company: ${company}
- Phone: ${phone || 'Not provided'}
- Address: ${address}

Business Details:
- Type of Work: ${workType}
- Selected Plan: ${monthlyPlan}
- Integration Level: ${integration}

Additional Information:
${additionalInfo || 'None provided'}

---
This request was submitted through the website contact form.
Please send the master service agreement to: ${email}
    `;

    // Send email to john@clrblt.com
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'john@clrblt.com',
      subject: `New Master Service Agreement Request - ${company}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    });

    // Optional: Send confirmation email to the customer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Master Service Agreement Request Received',
      text: `Dear ${name},

Thank you for your interest in our escrow services. We have received your request for a master service agreement.

You will receive your customized agreement within 24 hours at this email address.

Selected Plan: ${monthlyPlan}
Integration: ${integration}

If you have any questions, please don't hesitate to contact us.

Best regards,
The Clrblt Team`,
      html: `
        <h2>Thank you for your request!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for your interest in our escrow services. We have received your request for a master service agreement.</p>
        <p><strong>You will receive your customized agreement within 24 hours at this email address.</strong></p>
        <ul>
          <li><strong>Selected Plan:</strong> ${monthlyPlan}</li>
          <li><strong>Integration:</strong> ${integration}</li>
        </ul>
        <p>If you have any questions, please don't hesitate to contact us.</p>
        <p>Best regards,<br>The Clrblt Team</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Request sent successfully'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send request' },
      { status: 500 }
    );
  }
}
