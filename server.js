const inquirer = require('inquirer');

async function initialPrompt() {
  const userChoice = await optionsPrompt();
  console.log(userChoice.choice);
  switch (userChoice.choice) {
    case 'View all departments':
      viewDepartments();
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
    default:
      console.log('Goodbye!');
      return;
  }

  return initialPrompt();
}

function viewDepartments() {
  console.log('departments chosen');
  // do something
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
}

async function addEmployee() {
  const choice = await addEmployeePrompt();
  console.log(choice);
  // do something
}

async function updateEmployeeRole() {
  const choice = await updateRolePrompt();
  console.log(choice);
  // do something
}

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

function addRolePrompt() {
  return inquirer.prompt([
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
      type: 'input',
      name: 'roleDepartment',
      message: 'Which department does the role belong to?',
      validate: roleDepartmentInput => {
        if (roleDepartmentInput) {
          return true;
        } else {
          console.log('Please enter the department the role belongs to');
          return false;
        }
      }
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

initialPrompt();