import { NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

// Configure Mailchimp with your API key
mailchimp.setConfig({
  apiKey: 'f6896ac0ad9ef6d1403dd6bd47b629c0-us4',
  server: 'us4',
});

export async function GET() {
  try {
    // Get all lists/audiences
    // @ts-ignore - The type definitions are incomplete
    const response = await mailchimp.lists.getList();
    
    return NextResponse.json(
      { 
        success: true,
        lists: response
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Mailchimp error:', error);
    
    return NextResponse.json(
      { error: 'Failed to fetch Mailchimp audiences' },
      { status: 500 }
    );
  }
} 