const inquirer = require("inquirer");
const fs = require("fs");

// This is a function called 'createBadge'
// It has 1 parameter called 'license'
// This function will be called after the inquirer.prompt has finished
const createBadge = (license) => {
  // The variable 'badge' is created but left undefined
  let badge;
  // A switch statement is created and the 'license' parameter is passed
  // Depending on the value of 'license'
  // A different badge img will be set as the value of the variable 'badge'
  // Then 'badge' will be returned
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

// This is a function called 'readmeGenerator'
// It has 2 parameters
// 1st takes the value of 'badge' passed to it from the 'createsBadge' function
// 2nd is the destructured object 'answers' created by the 'inquirer.prompt()'
// This function will be called as a parameter for the fs.writeFile method
const readmeGenerator = (
  badge,
  {
    appName,
    description,
    visuals,
    url,
    install,
    usage,
    contribution,
    test,
    credits,
    license,
    username,
    email,
  }
) =>
  // The content for the README file is created and then returned back so that fs.writeFile can create it
  {
    return `
 ${badge}

# ${appName}
    
## Description 
    
${description}

## Table of Contents

[Visuals](#visuals)

[Website](#website)

[Installation](#installation)

[Usage](#usage)

[Credits](#credits)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## Visuals 

${visuals}

## Website 

${url}
## Installation 

${install}

## Usage

${usage}

## Credits 
${credits}

## License 
${license}

## Contributing
${contribution}

## Tests 
${test}

## Questions 
GitHub Profile : ${username}
For any additional questions you can contact me at :  ${email}
`;
  };

// Inquirer.prompt asks the user a series of questions
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
      name: "visuals",
      message: "Please input an img link for your application",
      type: "input",
    },
    {
      name: "url",
      message: "What is the URL for your application?",
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
  // Once all the questions have ended,
  // THEN
  .then((answers) => {
    // The 'createBadge' function is called and is passed the 'license' key from the answers object
    // The returned value is then set under the variable 'badge'
    const badge = createBadge(answers.license);
    // fs.writeFile method is called and passed 3 parameters
    // The 1st is the type of file to create
    // The 2nd is the 'readmeGenerator' which creates the content for the README file using the 'badge' variable and 'answers' obj
    // The 3rd is a cb function in case of an error
    fs.writeFile("README.md", readmeGenerator(badge, answers), (err) =>
      err ? console.log("Error", err) : console.log("success")
    );
  });
