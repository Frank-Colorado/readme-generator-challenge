const inquirer = require("inquirer");
const fs = require("fs");

const readmeGenerator = ({}) => {
  return `#

    ## Description 
    
    ## Table of Contents

    ## Visuals 
    
    
    ## Website URL 
    
    
    ## Installation 
    
    
    ## Usage
   
    
    ## Credits 

    ## License 
    Please refer to the LICENSE in the repo.
    
    ## Contributing

    ## Tests 

    ## Questions 
    
    `;
};

inquirer
  .prompt([
    {
      name: "appName",
      message: "What is the title of your application?",
      type: "input",
    },
    {
      name: "description",
      message: "Please give a description of your application.",
      type: "input",
    },
    {
      name: "install",
      message: "What are the instructions for installing your application?",
      type: "input",
    },
    {
      name: "usage",
      message: "How do you use your application?",
      type: "input",
    },
    {
      name: "contribution",
      message: "What are the guidelines for contributing to your application?",
      type: "input",
    },
    {
      name: "test",
      message: "What are the instructions for testing your application?",
      type: "input",
    },
    {
      name: "license",
      message: "Which license do you want to use for your repo?",
      type: "list",
      choices: [
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "Eclipse Public License 2.0",
        "Mozilla Public License 2.0",
      ],
    },
    {
      name: "username",
      message: "What is your GitHub username?",
      type: "input",
    },
    {
      name: "email",
      message: "What is your email address?",
      type: "input",
    },
  ])
  .then((answers) => console.log(answers));
