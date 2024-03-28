import { createConnection } from 'mysql2';

const db = createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'anjali'
});

async function connectToDatabase() {
  try {
    await db.connect();
    console.log('Connected to the database.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}



connectToDatabase();

export default db;
