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
        type: 'input',
        name: 'usageInstructions',
        message: 'List your usage instructions:',
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'Provide any steps for installation:',
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
        type: 'input',
        name: 'contributionInstructions',
        message: 'Please provide instructions for user contribution:',
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
        type: 'input',
        name: 'testInfo',
        message: 'Provide information about tests for your project:',
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
    // pull values from answers
    const { title, description, installInstructions, usageInstructions, provideContributionInstruction, contributionInstructions, testInfo, deployedLink, repoLink, githubUsername, emailAddress, license, projectStatus } = data;

    const readmeText =    
`# ${title}

# ![${license} badge](${setBadgeUrl(license)})

## Description 
${description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Link](#link) 
* [Code](#code)
* [Questions](#questions)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Project Status](#project-status)

## Installation
${installInstructions}

## Usage
${usageInstructions}

## Link
[${title} website](${deployedLink})

## Code
[${title} on Github](${repoLink})

## Questions
Send any questions to ${emailAddress}
Created by [${githubUsername}](https://github.com/${githubUsername}/)

## Contributing
${contributionInstructions}

## License
${license}

## Tests
${testInfo}

## Project Status
The project is ${projectStatus}
`

fs.writeFile(fileName, readmeText, (err) => 
err ? console.error(err) : console.log("README.md created successfully")
);
}

function setBadgeUrl(license) {
    switch (license) {
        case "Apache" : return "https://img.shields.io/badge/license-Apache-blue";
        case "BSD": return "https://img.shields.io/badge/license-BSD-green";
        case "GPL": return "https://img.shields.io/badge/license-GPL-blue";
        case "MIT": return "https://img.shields.io/badge/license-MIT-green";
        default: return "https://img.shields.io/badge/license-undefined-yellow";
    };
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
