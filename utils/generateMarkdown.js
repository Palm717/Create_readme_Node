// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// THE --renderLicenseBadge() -- FUNCTION RETURNS A SHIELDS.IO RENDERING OF THE CORRECT BADGE USED FOR THE APPLICATION. I UTILIZED A SWITCH METHOD TO BRING BACK THE CORRECT BADGE RENDERING
// IF THE USER CHOOSES MIT THE BADGE RETURNS MIT > APACHE RETURNS APACHE AND SO ON AND SO FORTH

function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;

    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
      break;

    case "GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      break;

    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
      break;

    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// I USE THE SAME SWITCH METHOD TO BRING IN THE LINKS FOR THE CORRECT LICENSE USED IN THE APPLICATION

function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
      break;

    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
      break;

    case "GPL v3":
      return "https://www.gnu.org/licenses/gpl-3.0";
      break;

    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";
      break;

    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// AGAIN THE SAME SWITCH METHOD IS USED TO ADD SOME TEXT TO THE LICENSE SECTION
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return "This project is using the MIT license";
      break;

    case "Apache 2.0":
      return "This project is using the Apache 2.0 license";
      break;

    case "GPL v3":
      return "This project is using the GPL v3 license";
      break;

    case "BSD 3":
      return "This project is using the BSD 3 license";
      break;

    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README

//USING THE PROVIDED CODE I AM PASSING IN MY ARGUMENT AS THE -- answerObj -- MY ANSWERS FROM THE USER PROVIDED BY THE -- index.js -- inquirer.prompt(); --
//I AM ACCESSING THE PROVIDED KEYS FROM THE NAME PROPERTY WITHIN -- index.js
function generateMarkdown(answerObj) {
  return `
  
  # ${answerObj.title} 

  ## Description 

  ${answerObj.description}

  ## Table Of Contents

  ## Installation 

  ${answerObj.installations}

  ## Usage 

  ${answerObj.usage}

  ## License 

  ${renderLicenseSection(answerObj.license)}

  ${renderLicenseBadge(answerObj.license)}

  ${renderLicenseLink(answerObj.license)}

  ## Contributions 

  ${answerObj.collaborators}

  ## Tests 

  ${answerObj.tests}

  ## Questions 

  If you would like to reach out with any questions you can find me here!

  ${answerObj.links}

  

`;
}

//IN ORDER TO BRING IN THESE FUNCTIONS ON ANOTHER FILE I NEED TO EXPORT THEM TO THE -- index.js -- FILE
// I REALIZED LATER ON THAT
module.exports = {
  generateMarkdown,
  // renderLicenseBadge,
  // renderLicenseLink,
  // renderLicenseSection,
};
