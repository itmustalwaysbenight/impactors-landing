import { NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

// Check for required environment variables
const apiKey = process.env.MAILCHIMP_API_KEY;
const server = process.env.MAILCHIMP_SERVER_PREFIX;
const listId = process.env.MAILCHIMP_LIST_ID;

if (!apiKey || !server || !listId) {
  console.error('Missing required Mailchimp environment variables');
}

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: apiKey || '',
  server: server || '', // e.g., 'us10'
});

export async function POST(request: Request) {
  try {
    // Check if environment variables are set
    if (!apiKey || !server || !listId) {
      return NextResponse.json(
        { error: 'Mailchimp is not properly configured' },
        { status: 500 }
      );
    }

    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Add member to Mailchimp list
    const response = await mailchimp.lists.addListMember(
      listId,
      {
        email_address: email,
        status: 'subscribed',
      }
    );

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email subscribed successfully',
        memberId: response.id 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Mailchimp subscription error:', error);
    
    // Handle case where email already exists
    if (error.status === 400 && error.response?.text) {
      const responseBody = JSON.parse(error.response.text);
      if (responseBody.title === 'Member Exists') {
        return NextResponse.json(
          { error: 'You are already subscribed to our mailing list.' },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
} 