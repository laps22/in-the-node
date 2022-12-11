// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'For additional quesitons I can be reached via email at',
        default: 'lianaurora@gmail.com',
        //add choices for contact methods//
    },
]);



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(quesitons).then(() => {
        fs.writeFile()    } 

    )
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
