import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET(request: Request) {
  // Get email from query parameter
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  
  if (!email) {
    return NextResponse.json({
      success: false,
      error: 'Email parameter is required',
      usage: 'Add ?email=your@email.com to the URL'
    }, { status: 400 });
  }
  
  try {
    const client = await pool.connect();
    
    try {
      // Try to insert the email
      const result = await client.query(
        'INSERT INTO subscribers (email) VALUES ($1) RETURNING id, email, created_at',
        [email]
      );
      
      return NextResponse.json({
        success: true,
        message: 'Test subscriber added successfully',
        subscriber: result.rows[0],
        timestamp: new Date().toISOString()
      });
    } catch (error: any) {
      // Handle duplicate email error
      if (error.code === '23505') { // PostgreSQL unique violation error code
        return NextResponse.json({
          success: false,
          error: 'Email already exists in the database',
          email
        }, { status: 400 });
      }
      
      throw error;
    } finally {
      client.release();
    }
  } catch (error: any) {
    console.error('Error in test subscription:', error);
    
    return NextResponse.json({
      success: false,
      error: error.message || 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
} 