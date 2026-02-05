import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      zip,
      projectType,
      budget,
      description
    } = body;

    // Basic validation
    if (!name || !email || !zip || !projectType || !budget) {
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
      <h2 style="color: #2d9d78;">🏠 New Project Submission</h2>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Contact Information:</h3>
        <ul style="line-height: 1.6;">
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
          <li><strong>Project ZIP Code:</strong> ${zip}</li>
        </ul>
      </div>

      <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Project Details:</h3>
        <ul style="line-height: 1.6;">
          <li><strong>Type of Project:</strong> ${projectType}</li>
          <li><strong>Estimated Budget:</strong> ${budget}</li>
        </ul>
      </div>

      ${description ? `
      <div style="background: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Project Description:</h3>
        <p style="line-height: 1.6;">${description}</p>
      </div>
      ` : ''}

      <hr style="margin: 30px 0;">
      <p style="color: #6b7280; font-style: italic;">This is a new lead from the project submission form.</p>
      <p style="background: #d1fae5; padding: 15px; border-radius: 8px; color: #065f46;">
        <strong>📍 Next Step:</strong> Match this project with contractors in the ${zip} area.
      </p>
    `;

    // Email content for customer confirmation
    const customerEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2d9d78;">Thank you for submitting your project!</h2>
        <p>Dear ${name},</p>
        
        <p>We've received your project details and are already working to match you with qualified contractors in your area who accept escrow payments.</p>
        
        <div style="background: #d1fae5; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
          <p style="margin: 0;"><strong style="color: #065f46;">🔒 Your payment will be protected through our escrow system until you're satisfied with the work.</strong></p>
        </div>

        <h3 style="color: #374151;">Your Project Summary:</h3>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
          <ul style="line-height: 1.8; margin: 0;">
            <li><strong>Project Type:</strong> ${projectType}</li>
            <li><strong>Budget Range:</strong> ${budget}</li>
            <li><strong>Location:</strong> ${zip}</li>
          </ul>
        </div>

        <h3 style="color: #374151; margin-top: 30px;">What happens next?</h3>
        <ol style="line-height: 1.8;">
          <li>We'll review your project details</li>
          <li>We'll reach out to qualified contractors in your area</li>
          <li>You'll receive contractor matches via email</li>
          <li>Once you choose a contractor, we'll set up the escrow account</li>
        </ol>

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
      from: `"Clrblt Project Submission" <${process.env.EMAIL_USER}>`,
      to: 'john@clrblt.com',
      subject: `🏠 New Project Lead - ${projectType} in ${zip} (${budget})`,
      text: `New project submission from ${name}. ${projectType} project in ${zip} with budget ${budget}.`,
      html: adminEmailHTML,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: `"Clrblt Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Project Received - We\'re Finding You Contractors',
      text: `Dear ${name}, thank you for submitting your project. We're matching you with qualified contractors in your area.`,
      html: customerEmailHTML,
    });

    return NextResponse.json({
      success: true,
      message: 'Project submitted successfully'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error type:', typeof error);
    
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Error message:', errorMessage);
    
    return NextResponse.json(
      { 
        error: 'Failed to submit project',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}
