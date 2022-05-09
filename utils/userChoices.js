const {
  optionsPrompt,
  addDepartmentPrompt,
  addRolePrompt,
  addEmployeePrompt,
  updateRolePrompt
} = require('./prompts');
require('console.table');
const getAllDepartments = require('./queries');

async function init() {
  const userChoice = await optionsPrompt();

  switch (userChoice.choice) {
    case 'View all departments':
      await viewDepartments();
      break;
    case 'View all roles':
      viewRoles();
      break;
    case 'View all employees':
      viewEmployees();
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
      return;
  };

  return init();
}

async function viewDepartments() {
  // info from database
  const info = await getAllDepartments();

  // populate values with id and names from database
  let values = []
  info[0].forEach(object => {
    values.push([object.id, object.name])
  })

  console.table(['ID', 'Name'], values);

  return;
};

function viewRoles() {
  console.log('view roles chosen');
  // do something
};

function viewEmployees() {
  console.log('view employees chosen');
  // do something
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