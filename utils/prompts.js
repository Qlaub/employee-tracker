const inquirer = require('inquirer');
const {
  getAllDepartments,
  getAllRoles,
  getAllEmployees
} = require('./queries');

function optionsPrompt() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
    }
  ]);
};

function addDepartmentPrompt() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'department',
      message: 'What is the name of the department?',
      validate: departmentInput => {
        if (departmentInput) {
          return true;
        } else {
          console.log('Please enter the department you wish to add');
          return false;
        };
      }
    }
  ]);
};

async function addRolePrompt() {
  // get all current departments in the database
  const departments = await getAllDepartments();

  // iterate over results and push to an array
  let departmentArr = []
  departments[0].forEach(department => {
    departmentArr.push(department.name);
  });
  return await inquirer.prompt([
    {
      type: 'input',
      name: 'roleName',
      message: 'What is the name of the role?',
      validate: roleNameInput => {
        if (roleNameInput) {
          return true;
        } else {
          console.log('Please enter the role you wish to add');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'roleSalary',
      message: 'What is the salary of the role?',
      validate: roleSalaryInput => {
        if (roleSalaryInput) {
          return true;
        } else {
          console.log('Please enter the salary of the role');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'roleDepartment',
      message: 'Which department does the role belong to?',
      choices: departmentArr
    }
  ]);
};

async function addEmployeePrompt() {
  // get all current roles in the database
  const roles = await getAllRoles();

  // iterate over results and push to an array
  let rolesArr = []
  roles[0].forEach(role => {
    rolesArr.push(role.title);
  });

  const employees = await getAllEmployees();

  let employeesArr = ['None'];
  employees[0].forEach(employee => {
    employeesArr.push(`${employee.first_name} ${employee.last_name}`);
  });

  return await inquirer.prompt([
    {
      type: 'input',
      name: 'employeeFirstName',
      message: "What is the employee's first name?",
      validate: employeeFirstNameInput => {
        if (employeeFirstNameInput) {
          return true;
        } else {
          console.log('Please enter the first name of the employee');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeLastName',
      message: "What is the employee's last name?",
      validate: employeeLastNameInput => {
        if (employeeLastNameInput) {
          return true;
        } else {
          console.log('Please enter the last name of the employee');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'employeeRole',
      message: "What is the employee's role?",
      choices: rolesArr
    },
    {
      type: 'list',
      name: 'employeeManager',
      message: "Who is the employee's manager?",
      choices: employeesArr
    }
  ]);
};

async function updateRolePrompt() {
  const employees = await getAllEmployees();

  let employeesArr = [];
  employees[0].forEach(employee => {
    employeesArr.push(`${employee.first_name} ${employee.last_name}`);
  });

  const roles = await getAllRoles();

  let rolesArr = []
  roles[0].forEach(role => {
    rolesArr.push(role.title);
  });

  return await inquirer.prompt([
    {
      type: 'list',
      name: 'employee',
      message: "Which employee's role do you want to update?",
      choices: employeesArr
    },
    {
      type: 'list',
      name: 'employeeRole',
      message: "What is their new role?",
      choices: rolesArr
    }
  ]);
};

module.exports = {
  optionsPrompt,
  addDepartmentPrompt,
  addRolePrompt,
  addEmployeePrompt,
  updateRolePrompt
};