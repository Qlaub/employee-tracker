const db = require('../db/connection');

function getAllDepartments() {
  const sql = 'SELECT * FROM departments';
  return db.query(sql);
};

module.exports = getAllDepartments;