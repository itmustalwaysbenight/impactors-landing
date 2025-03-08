import { NextResponse } from 'next/server';
import { getSubscribers } from '@/lib/db';

// Basic authentication middleware
function isAuthenticated(request: Request) {
  // Get the Authorization header
  const authHeader = request.headers.get('Authorization');
  
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return false;
  }
  
  // Decode the base64 credentials
  try {
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = atob(base64Credentials);
    const [username, password] = credentials.split(':');
    
    // Check against environment variables or hardcoded values for demo
    // In production, use environment variables
    const expectedUsername = process.env.ADMIN_USERNAME || 'admin';
    const expectedPassword = process.env.ADMIN_PASSWORD || 'impactors2024';
    
    return username === expectedUsername && password === expectedPassword;
  } catch (error) {
    console.error('Authentication error:', error);
    return false;
  }
}

export async function GET(request: Request) {
  // Check authentication
  if (!isAuthenticated(request)) {
    return new Response('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Subscribers Admin", charset="UTF-8"'
      }
    });
  }
  
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