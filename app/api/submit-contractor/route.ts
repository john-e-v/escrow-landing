import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      company,
      email,
      phone,
      zip,
      services
    } = body;

    // Basic validation
    if (!name || !company || !email || !phone || !zip || !services) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email transporter using Google Workspace
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content for john@clrblt.com
    const adminEmailHTML = `
      <h2 style="color: #f7c948;">🔨 New Contractor Signup</h2>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Contact Information:</h3>
        <ul style="line-height: 1.6;">
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Company:</strong> ${company}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
        </ul>
      </div>

      <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Service Details:</h3>
        <ul style="line-height: 1.6;">
          <li><strong>Service Area (ZIP):</strong> ${zip}</li>
          <li><strong>Primary Service:</strong> ${services}</li>
        </ul>
      </div>

      <hr style="margin: 30px 0;">
      <p style="color: #6b7280; font-style: italic;">This contractor signed up for free leads through the website.</p>
      <p style="background: #fef3c7; padding: 15px; border-radius: 8px; color: #92400e;">
        <strong>📍 Next Step:</strong> Add to contractor database for ${zip} area. Send any matching project leads.
      </p>
    `;

    // Email content for contractor confirmation
    const contractorEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f7c948;">Welcome to Clrblt!</h2>
        <p>Dear ${name},</p>
        
        <p>Thank you for signing up as a contractor. You're now part of our network of professionals who accept escrow payments.</p>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
          <p style="margin: 0;"><strong style="color: #92400e;">🎉 You'll receive free leads for projects in your area - no monthly fees, ever.</strong></p>
        </div>

        <h3 style="color: #374151;">Your Profile:</h3>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
          <ul style="line-height: 1.8; margin: 0;">
            <li><strong>Company:</strong> ${company}</li>
            <li><strong>Service Area:</strong> ${zip}</li>
            <li><strong>Primary Service:</strong> ${services}</li>
          </ul>
        </div>

        <h3 style="color: #374151; margin-top: 30px;">How it works:</h3>
        <ol style="line-height: 1.8;">
          <li><strong>We send you leads</strong> - When a project matches your service area, you'll get an email</li>
          <li><strong>You bid on the job</strong> - Connect directly with the homeowner</li>
          <li><strong>Escrow protects everyone</strong> - The homeowner funds the escrow, you get paid as milestones are completed</li>
          <li><strong>Pay suppliers directly</strong> - Materials and subcontractors can be paid straight from escrow</li>
        </ol>

        <div style="background: #d1fae5; padding: 20px; border-radius: 8px; margin: 30px 0;">
          <h3 style="color: #065f46; margin-top: 0;">💰 Simple Pricing</h3>
          <ul style="line-height: 1.8; margin: 0;">
            <li>Sign up: <strong>Free</strong></li>
            <li>Receive leads: <strong>Free</strong></li>
            <li>Monthly fee: <strong>$0</strong></li>
            <li>Transaction fee: <strong>2.9%</strong> (only when funds are released)</li>
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
      from: `"Clrblt Contractor Signup" <${process.env.EMAIL_USER}>`,
      to: 'john@clrblt.com',
      subject: `🔨 New Contractor Signup - ${company} (${services}) in ${zip}`,
      text: `New contractor signup: ${name} from ${company}. ${services} in ${zip} area.`,
      html: adminEmailHTML,
    });

    // Send confirmation email to contractor
    await transporter.sendMail({
      from: `"Clrblt Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Welcome to Clrblt - You\'re In!',
      text: `Dear ${name}, welcome to Clrblt! You'll now receive free leads for projects in your area.`,
      html: contractorEmailHTML,
    });

    return NextResponse.json({
      success: true,
      message: 'Contractor signup successful'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error type:', typeof error);
    
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Error message:', errorMessage);
    
    return NextResponse.json(
      { 
        error: 'Failed to complete signup',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}
