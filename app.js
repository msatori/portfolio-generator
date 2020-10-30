
//call inquirer 
const inquirer = require('inquirer');

inquirer
 .prompt([
     {
         type: 'input',
         name: 'name',
         message: 'What is your Name?'
     }
 ])
 .then(answers => console.log(answers));
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
