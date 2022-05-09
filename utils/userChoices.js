const {
  optionsPrompt,
  addDepartmentPrompt,
  addRolePrompt,
  addEmployeePrompt,
  updateRolePrompt
} = require('./prompts');
require('console.table');
const  {
  getAllDepartments,
  getAllRoles,
  getAllEmployees
} = require('./queries');

async function init() {
  const userChoice = await optionsPrompt();

  switch (userChoice.choice) {
    case 'View all departments':
      await viewDepartments();
      break;
    case 'View all roles':
      await viewRoles();
      break;
    case 'View all employees':
      await viewEmployees();
      break;
    case 'Add a department':
      await addDepartment();
      break;
    case 'Add a role':
      await addRole();
      break;
    case 'Add an employee':
      await addEmployee();
      break;
    case 'Update an employee role':
      await updateEmployeeRole();
      break;
    // default option is to exit program
    default:
      console.log('Goodbye!');
      return process.exit();
  };

  return init();
}

async function viewDepartments() {
  // info from database
  const info = await getAllDepartments();

  // populate values with id and names from database
  let values = []
  info[0].forEach(column => {
    values.push([column.id, column.name]);
  });

  // format table output with column names and values
  console.table(['ID', 'Name'], values);

  return;
};

async function viewRoles() {
  const info = await getAllRoles();

  let values = []
  info[0].forEach(column => {
    values.push([column.id, column.title, column.salary, column.name]);
  });

  console.table(['ID', 'Title', 'Salary', 'Department'], values);

  return;
};

async function viewEmployees() {
  const info = await getAllEmployees();

  let values = []
  info[0].forEach(column => {
    values.push([column.id, column.first_name, column.last_name, column.title, column.department, column.manager])
  });

  console.table(['ID', 'First Name', 'Last Name', 'Title', 'Department', 'Manager'], values);

  return;
};

async function addDepartment() {
  const choice = await addDepartmentPrompt();
  console.log(choice);
  // do something
};

async function addRole() {
  const choice = await addRolePrompt();
  console.log(choice);
  // do something
};

async function addEmployee() {
  const choice = await addEmployeePrompt();
  console.log(choice);
  // do something
};

async function updateEmployeeRole() {
  const choice = await updateRolePrompt();
  console.log(choice);
  // do something
};

module.exports = init;