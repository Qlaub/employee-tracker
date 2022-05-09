const db = require('../db/connection');

function getAllDepartments() {
  const sql = 'SELECT * FROM departments';
  return db.query(sql);
};

function getAllRoles() {
  const sql = `SELECT roles.id, roles.title, roles.salary, departments.name
  FROM roles
  LEFT JOIN departments
  ON roles.department_id = departments.id`;
  return db.query(sql);
};

function getAllEmployees() {
  const sql = `SELECT e.id, e.first_name, e.last_name, roles.title, departments.name AS department, roles.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
    FROM employees e
    LEFT JOIN roles
    ON e.role_id = roles.id
    LEFT JOIN employees m
    ON e.manager_id = m.id
    INNER JOIN departments
    ON roles.department_id = departments.id
    ORDER BY e.id`;
  return db.query(sql);
};

function addDepartment(department) {
  const sql = `INSERT INTO departments (name)
    VALUES (?)`;

}

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees
};