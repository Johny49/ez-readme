// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

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
        message: 'Provide a description:',
    },
    {
        type: 'list',
        name: 'provideUseInstructions',
        message: 'Do you wish to provide instructions for using the project?',
        choices: ['yes', 'no'],
    },
    {
        type: 'input',
        name: 'usageInstructions',
        message: 'List your usage instructions:',
        when: function (answers) {
            //only show if provideInstructions is true
            return answers.provideUseInstructions === 'yes';
        },
    },
    {
        type: 'list',
        name: 'provideInstallInstructions',
        message: 'Do you wish to provide instructions for installation?',
        choices: ['yes', 'no'],
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'Provide any steps for installation:',
        when: function (answers) {
            //only show if provideInstructions is true
            return answers.provideUseInstructions === 'yes';
        },
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
    }, 
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your email address?',
    }, 
    {
        type: 'list',
        name: 'provideContributionInstructions',
        message: 'Do you wish to include steps on how users can contribute?',
        choices: ['yes', 'no'],
    },
    {
        type: 'input',
        name: 'contributionInstructions',
        message: 'Please provide instructions for user contribution:',
        when: function (answers) {
            //only show if provideInstructions is true
            return answers.provideContributionInstructions === 'yes';
        },
    },
    {
        type: 'input',
        name: 'repoLink',
        message: 'What is the link for your GitHub repo?',
    },
    {
        type: 'input',
        name: 'deployedLink',
        message: 'What is the link for your deployed application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license option applies to your project?',
        choices: ["Apache", "BSD", "GPL", "MIT"],
    },
    {
        type: 'list',
        name: 'provideTestInfo',
        message: 'Do you have information about tests that you wish to include?',
        choices: ['yes', 'no'],
    },
    {
        type: 'input',
        name: 'testInfo',
        message: 'Provide information about tests for your project:',
        when: function (answers) {
            //only show if provideInstructions is true
            return answers.provideTestInfo === 'yes';
        },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
});
}
// Function call to initialize app
init();
