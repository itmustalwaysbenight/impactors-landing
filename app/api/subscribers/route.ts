import { NextResponse } from 'next/server';
import { getSubscribers } from '@/lib/db';

export async function GET() {
  try {
    const subscribers = await getSubscribers();
    
    return NextResponse.json({ 
      success: true,
      count: subscribers.length,
      subscribers
    });
  } catch (error: any) {
    console.error('Error fetching subscribers:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch subscribers',
        details: error.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
} 