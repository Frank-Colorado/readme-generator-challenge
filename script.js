const inquirer = require("inquirer");
const fs = require("fs");

const createBadge = (license) => {
  let badge;
  switch (license) {
    case "Apache License 2.0":
      badge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "MIT License":
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Boost Software License 1.0":
      badge =
        "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "GNU General Public License v3.0":
      badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "Mozilla Public License 2.0":
      badge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
      break;
  }
  return badge;
};

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
      name: "credits",
      message:
        "What resources did you use as a reference for creating your application?",
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
        "GNU General Public License v3.0",
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
  .then((answers) => {
    const badge = createBadge(answers.license);
    console.log(badge);
  });
