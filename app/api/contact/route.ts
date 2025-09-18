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
    // Create email transporter using Google Workspace - updated2
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // noreply@clrblt.com (your alias)
        pass: process.env.EMAIL_PASS, // Your Google App Password
      },
    });

    // Email content for john@clrblt.com
    const adminEmailHTML = `
      <h2 style="color: #1e40af;">New Master Service Agreement Request</h2>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Contact Information:</h3>
        <ul style="line-height: 1.6;">
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Company:</strong> ${company}</li>
          <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
          <li><strong>Address:</strong> ${address}</li>
        </ul>
      </div>

      <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Business Details:</h3>
        <ul style="line-height: 1.6;">
          <li><strong>Type of Work:</strong> ${workType}</li>
          <li><strong>Selected Plan:</strong> ${monthlyPlan}</li>
          <li><strong>Integration Level:</strong> ${integration}</li>
        </ul>
      </div>

      ${additionalInfo ? `
      <div style="background: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Additional Information:</h3>
        <p style="line-height: 1.6;">${additionalInfo}</p>
      </div>
      ` : ''}

      <hr style="margin: 30px 0;">
      <p style="color: #6b7280; font-style: italic;">This request was submitted through the website contact form.</p>
      <p style="background: #dbeafe; padding: 15px; border-radius: 8px; color: #1e40af;">
        <strong>📧 Please send the master service agreement to:</strong> ${email}
      </p>
    `;

    // Email content for customer confirmation
    const customerEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">Thank you for your request!</h2>
        <p>Dear ${name},</p>
        
        <p>Thank you for your interest in our escrow services. We have received your request for a master service agreement.</p>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
          <p style="margin: 0;"><strong style="color: #1e40af;">🕐 You will receive your customized agreement within 24 hours at this email address.</strong></p>
        </div>

        <h3 style="color: #374151;">Your Request Details:</h3>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
          <ul style="line-height: 1.8; margin: 0;">
            <li><strong>Company:</strong> ${company}</li>
            <li><strong>Selected Plan:</strong> ${monthlyPlan}</li>
            <li><strong>Integration:</strong> ${integration}</li>
          </ul>
        </div>

        <p style="margin-top: 30px;">If you have any questions, please don't hesitate to contact us at john@clrblt.com</p>
        
        <p style="margin-top: 30px;">
          Best regards,<br>
          <strong>The Clrblt Team</strong>
        </p>

        <hr style="margin: 40px 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px; text-align: center;">
          This is an automated confirmation email from www.clrblt.com
        </p>
      </div>
    `;

    // Send email to john@clrblt.com (admin notification)
    await transporter.sendMail({
      from: `"Clrblt Contact Form" <${process.env.EMAIL_USER}>`, // From alias
      to: 'john@clrblt.com', // To your main email
      subject: `New Master Service Agreement Request - ${company}`,
      text: `New request from ${name} at ${company}. Check your email for full details.`, // Plain text fallback
      html: adminEmailHTML,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: `"Clrblt Team" <${process.env.EMAIL_USER}>`, // From alias  
      to: email, // To the customer
      subject: 'Master Service Agreement Request Received',
      text: `Dear ${name}, thank you for your request. You will receive your master service agreement within 24 hours.`, // Plain text fallback
      html: customerEmailHTML,
    });

    return NextResponse.json({
      success: true,
      message: 'Request sent successfully'
    });

 } catch (error) {
  console.error('Error sending email:', error);
  return NextResponse.json(
    { 
      error: 'Failed to send request',
      details: process.env.NODE_ENV === 'development' ? 
        (error instanceof Error ? error.message : String(error)) : 
        undefined 
    },
    { status: 500 }
  );
}
}
