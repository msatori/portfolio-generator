
//call inquirer 
const inquirer = require('inquirer');


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username? (Required)',
            validate: userNameInput => {
                if (userNameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};

const promptProject = portfolioData => {
    
    console.log(`
    =================
    Add a New Project
    =================
    ` );
    
    if (!portfolioData.projects) {
        portfolioData.projects = [];
      }
    
    portfolioData.projects = [];
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of the project (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your Project!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub project link!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?'
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to add another project?',
            default: false
        }

    ])
            .then(projectData => {
                portfolioData.projects.push(projectData);
                if (projectData.confirmAddProject) {
                    return promptProject(portfolioData)
                } else {
                    return portfolioData;
                }
            });
};

promptUser()
    .then(answers => console.log(answers))
    .then(promptProject)
    .then(projectAnswers => console.log(projectAnswers));
//call filesaver
// const fs = require('fs');
// //call the generate page module 
// const generatePage = require('./src/page-template');
// //this is a constant for creating an html page
// const pageHTML = generatePage(name, github)

// //this creates the index.html for the webpage
// fs.writeFile('./index.html', pageHTML, err => {
//     //add error handling
//     if(err) throw (err);
//     //if page generation is successful
//     console.log('Portfolio Complete! Check out index.html to see the ouput!');
// });
