import { Pool } from 'pg';

// Create a connection pool to the Neon database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Required for some Neon connections
  }
});

// Test the database connection
export async function testConnection() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT NOW()');
    console.log('Database connection successful:', result.rows[0]);
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  } finally {
    client.release();
  }
}

// Initialize the database table if it doesn't exist
export async function initializeDatabase() {
  console.log('Initializing database...');
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
    
    // Test the connection after initialization
    await testConnection();
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  } finally {
    client.release();
  }
}

// Add a subscriber to the database
export async function addSubscriber(email: string) {
  console.log(`Adding subscriber with email: ${email}`);
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO subscribers (email) VALUES ($1) RETURNING id, email, created_at',
      [email]
    );
    console.log('Subscriber added:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error(`Error adding subscriber ${email}:`, error);
    throw error;
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
  } catch (error) {
    console.error('Error getting subscribers:', error);
    throw error;
  } finally {
    client.release();
  }
}

export { pool }; 