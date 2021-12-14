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
    {
        type: 'list',
        name: 'projectStatus',
        message: "What is the status of your project?",
        choices: ['concept', 'work in process', 'active', 'abandoned', 'completed'],
    },
];

// function to write README file
function writeToFile(fileName, data) {
    const { title, description, provideInstallInstructions, installInstructions, provideUseInstructions, usageInstructions, provideContributionInstruction, contributionInstructions, provideTestInfo, testInfo, deployedLink, repoLink, githubUsername, email, license, projectStatus } = data;
    badges = "";
    const readmeText =    
`# ${title}

# ${badges}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)   ${provideUseInstructions} ${usageInstructions}
* [Installation](#installation)     ${provideInstallInstructions} ${installInstructions}
* [Link](#link) 
* [Code](#code)
* [Contact](#contact)
* [Questions](#questions)
* [Contributing](#contributing) ${provideContributionInstruction}   ${contributionInstructions}
* [License](#license)
* [Tests](#tests)   ${provideTestInfo} ${testInfo}
* [Project Status](#project-status)

## Description 
${description}

## Usage ${provideUseInstructions} 
${usageInstructions}

## Installation ${provideInstallInstructions}
${installInstructions}

## Link
[${title} website](${deployedLink})

## Code
[${title} on Github](${repoLink})

## Contact 
Created by [${githubUsername}](https://github.com/${githubUsername}/)

## Questions
Send any questions to ${email}

## Contributing ${provideContributionInstruction}
${contributionInstructions}

## License
${license}

## Tests ${provideTestInfo}
${testInfo}

## Project Status
The project is ${projectStatus}
`

fs.writeFile(fileName, readmeText, (err) => 
err ? console.error(err) : console.log("README.md created successfully")
);
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)    //TODO change to write file
            writeToFile("testREADME.md", answers)
});
}
// Function call to initialize app
init();
