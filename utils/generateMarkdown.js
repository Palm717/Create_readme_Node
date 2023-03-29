// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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

  ${answerObj.license}

  ## Contributions 

  ${answerObj.collaborators}

  ## Tests 

  ${answerObj.tests}

  ## Questions 

  If you would like to reach out with any questions you can find me here!

  ${answerObj.links}

  

`;
}

module.exports = generateMarkdown;
