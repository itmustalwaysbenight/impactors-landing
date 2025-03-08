import { NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: 'f6896ac0ad9ef6d1403dd6bd47b629c0-us4',
  server: 'us4',
});

export async function GET() {
  try {
    // @ts-ignore - The type definitions are incomplete
    const response = await mailchimp.ping.get();
    
    // Get all lists
    // @ts-ignore - The type definitions are incomplete
    const listsResponse = await mailchimp.lists.getAllLists();
    
    return NextResponse.json({
      ping: response,
      lists: listsResponse.lists?.map((list: any) => ({
        id: list.id,
        name: list.name,
        memberCount: list.stats?.member_count
      })) || []
    });
  } catch (error: any) {
    console.error('Mailchimp error:', error);
    
    return NextResponse.json({
      error: error.message || 'Unknown error',
      status: error.status,
      response: error.response?.text
    }, { status: 500 });
  }
} 