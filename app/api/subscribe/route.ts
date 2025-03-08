import { NextResponse } from 'next/server';
import { addSubscriber, initializeDatabase } from '@/lib/db';

// Initialize the database when the API is first loaded
initializeDatabase().catch(console.error);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    try {
      // Store the email in the database
      const subscriber = await addSubscriber(email);
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Email subscribed successfully',
          subscriber
        },
        { status: 200 }
      );
    } catch (error: any) {
      // Handle duplicate email error
      if (error.code === '23505') { // PostgreSQL unique violation error code
        return NextResponse.json(
          { error: 'You are already subscribed to our mailing list.' },
          { status: 400 }
        );
      }
      
      throw error;
    }
  } catch (error: any) {
    console.error('Subscription error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to subscribe. Please try again later.',
        details: error.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
} 