const inquirer = require('inquirer');

async function initialPrompt() {
  const userChoice = await userOptions();
  console.log(userChoice);
}

function userOptions () {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
    }
  ]);
};

initialPrompt();