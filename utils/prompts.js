const inquirer = require('inquirer');
const {
  getAllDepartments
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

function addEmployeePrompt() {
  return inquirer.prompt([
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
      type: 'input',
      name: 'employeeRole',
      message: "What is the employee's role?",
      validate: employeeRoleInput => {
        if (employeeRoleInput) {
          return true;
        } else {
          console.log('Please enter the role of the employee');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeManager',
      message: "Who is the employee's manager?",
      validate: employeeManagerInput => {
        if (employeeManagerInput) {
          return true;
        } else {
          console.log('Please enter the manager of the employee');
          return false;
        }
      }
    }
  ]);
};

function updateRolePrompt() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'employeeRole',
      message: "Which employee's role do you want to update?",
      choices: [''] // EMPLOYEE TABLE FIRST NAME AND LAST NAME LIST DB QUERY
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