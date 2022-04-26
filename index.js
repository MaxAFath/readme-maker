
const { Console } = require('console');
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatepage = require('./src/page-template')

// TODO: Create an array of questions for user input
const asks = ["project name",
    "What is the objective of this application?",
    'How to install',
    'License',
    'intended usage',
    "contributering",
    'testing instructions',
    'gitHub',
    'email'
];
const licenseArray = ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause"Simplified" License', 'BSD 3-Clause"New" or "Revised" License', 'Bost Software License 1.0', 'Creative Commons Zero v1.0', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']

// TODO: Create a function to write README file
function writeToFile(readmeData) {
    fs.writeFile('.README.md', pageMD ,err =>{
        if(err) throw new Error(err);
    })
}

// TODO: Create a function to initialize app
function init() {
    console.log(`
=================
Add a New Project
=================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'fileName',
            message: asks[0],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please eneter the file name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'install',
            message: 'How do you install this application'

        }, {
            type: 'input',
            name: 'useage',
            message: 'How do you want people to use this application'
        }, {
            type: 'list',
            name: 'license',
            message: 'What licenses are you using? (default is None)',
            choices: licenseArray,
            default: 0
        }, {
            type: 'input',
            name: 'contribution',
            message: 'How do you want people to contribute? (defult is instructing people to not',
            default: 'Please do not contribute to this project'
        }, {
            type: 'input',
            name: 'testing',
            message: 'How do you want people to test this project?'
        }, {
            type: 'input',
            name: 'github',
            message: 'What is your Github user name',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Enter your user name');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a email to contiune');
                    return false;
                }
            }
        }
    ])
        .then(readmeData => {
            const readme = generatepage(readmeData);

            fs.writeFile('./README.md', readme, err => {
                if(err)throw new Error(err);
            })
        });
}

// Function call to initialize app
init();