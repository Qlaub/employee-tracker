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

function newDepartment(department) {
  const sql = `INSERT INTO departments (name)
    VALUES (?)`;
  const params = [department];
  return db.query(sql, params);
};

function getDepartmentId(name) {
  const sql = `SELECT departments.id
    FROM departments
    WHERE departments.name = ?`
  const params = [name];
  return db.query(sql, params);
};

function newRole(title, salary, departmentId) {
  const sql = `INSERT INTO roles (title, salary, department_id)
    VALUES (?, ?, ?)`;
  const params = [title, salary, departmentId];
  return db.query(sql, params);
};

function newEmployee(firstName, lastName, roleId, managerId) {
  const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES (?, ?, ?, ?)`;
  const params = [firstName, lastName, roleId, managerId];
  return db.query(sql, params);
};

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  newDepartment,
  getDepartmentId,
  newRole
};