import { NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

// Hardcoded for development - move to environment variables for production
const apiKey = 'f6896ac0ad9ef6d1403dd6bd47b629c0-us4';
const server = 'us4';

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: apiKey,
  server: server,
});

export async function POST(request: Request) {
  try {
    // Get the audience ID first
    // @ts-ignore - The type definitions are incomplete
    const listsResponse = await mailchimp.lists.getAllLists();
    console.log('Available lists:', JSON.stringify(listsResponse, null, 2));
    
    // Find the "impactors" audience or use the first one
    let listId = '';
    if (listsResponse && listsResponse.lists && listsResponse.lists.length > 0) {
      const impactorsList = listsResponse.lists.find((list: any) => 
        list.name.toLowerCase() === 'impactors'
      );
      
      listId = impactorsList ? impactorsList.id : listsResponse.lists[0].id;
      console.log('Using list ID:', listId);
    } else {
      return NextResponse.json(
        { error: 'No Mailchimp audiences found' },
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
      try {
        const responseBody = JSON.parse(error.response.text);
        if (responseBody.title === 'Member Exists') {
          return NextResponse.json(
            { error: 'You are already subscribed to our mailing list.' },
            { status: 400 }
          );
        }
      } catch (e) {
        // Ignore JSON parsing error
      }
    }

    return NextResponse.json(
      { 
        error: 'Failed to subscribe. Please try again later.',
        details: error.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
} 