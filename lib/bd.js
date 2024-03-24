// db.js
import mysql from 'mysql';

// Create MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database',
});

// Function to execute SQL queries
export const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(err);
      }
      connection.query(sql, values, (err, results) => {
        connection.release();
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  });
};
