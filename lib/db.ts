import { Pool } from 'pg';

// Create a connection pool to the Neon database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Initialize the database table if it doesn't exist
export async function initializeDatabase() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        status VARCHAR(50) DEFAULT 'active'
      );
    `);
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    client.release();
  }
}

// Add a subscriber to the database
export async function addSubscriber(email: string) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO subscribers (email) VALUES ($1) RETURNING id, email, created_at',
      [email]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Get all subscribers
export async function getSubscribers() {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'SELECT id, email, created_at, status FROM subscribers ORDER BY created_at DESC'
    );
    return result.rows;
  } finally {
    client.release();
  }
}

export { pool }; 