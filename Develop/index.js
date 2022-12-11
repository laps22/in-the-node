// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project in a few sentences.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the use case of the application?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What apps are needed for the project to run?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to assign to your project?',
        choices: ['Apache 2.0', 'EPL 1.0', 'MIT', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Describe contribution guidelines for this application, if any.',
    }, {
        type: 'input',
        name: 'tests',
        message: 'What command can you use to test?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What email address can you be reached at for additional questions?',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFileSync(fileName, data);
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            console.log(data);
            writeToFile('README.md', generateMarkdown(data));
        })
};

// Function call to initialize app
init();
