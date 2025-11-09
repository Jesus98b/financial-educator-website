import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema, isHoneypotValid, sanitizeInput } from '@/lib/validation';

/**
 * API route handler for contact form submissions
 * POST /api/contact
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate honeypot
    if (!isHoneypotValid(body.website)) {
      // Silently fail for bots
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Validate form data
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validationResult.error.errors },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = validationResult.data;

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : '',
      message: sanitizeInput(message),
      timestamp: new Date().toISOString(),
    };

    // TODO: Replace with actual email service (e.g., SendGrid, Resend, Nodemailer)
    // For now, we'll just log the data
    console.log('Contact form submission:', sanitizedData);

    // In production, you would:
    // 1. Send email notification
    // 2. Store in database
    // 3. Send confirmation email to user

    return NextResponse.json(
      { success: true, message: 'Message received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

