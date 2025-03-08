import { NextResponse } from 'next/server';
import { testConnection, pool } from '@/lib/db';

export async function GET() {
  try {
    // Test the database connection
    const connectionSuccessful = await testConnection();
    
    // Get the connection string (with password masked)
    const connectionString = process.env.DATABASE_URL || '';
    const maskedConnectionString = connectionString.replace(/:[^:@]*@/, ':****@');
    
    // Get pool status
    const poolStatus = {
      totalCount: pool.totalCount,
      idleCount: pool.idleCount,
      waitingCount: pool.waitingCount
    };
    
    return NextResponse.json({
      success: connectionSuccessful,
      message: connectionSuccessful ? 'Database connection successful' : 'Database connection failed',
      connectionString: maskedConnectionString,
      poolStatus,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('Error testing database connection:', error);
    
    return NextResponse.json({
      success: false,
      error: error.message || 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
} 