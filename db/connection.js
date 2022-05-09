const mysql = require('mysql2');
require('dotenv').config();

// connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USER,
    // rename .env_sample to .env and within that file update the DB_PASSWORD to equal your mysql password
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  console.log('Connected to the company database.')
);

module.exports = db.promise();