// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = inquirer
  .prompt([
    {
      name: "title",
      message: "What is the title of the project?",
    },
    {
      name: "description",
      message: "Provide a description of the project application.",
    },
    {
      name: "contents",
    },
    {
      name: "instructions",
      message:
        "Are there any accompanying instructions for the user to know regarding how to install the application?",
    },

    {
      name: "usage",
      message: "How will the user interact with this application?",
    },
    {
      type: "list",
      name: "license",
      choices: ["MIT", "Apache", "GPL", "GNU GPL", "BSD"],
    },
    {
      name: "collaborators",
      message: "Was this project application a collaboration? Provide detail.",
    },
    {
      name: "tests",
      message: "Provide instructions regarding operation of the application.",
    },
    {
      name: "links",
      message: "Are there any contact links or socials to be added?",
    },
  ])
  .then((answerObj) => {
    console.log(answerObj);

    // TODO: Create a function to write README file

    fs.writeFile("README.md", markdown(answerObj), (err) => {
      if (err) {
        console.log("unsuccessful");
      }
      console.log("success");
    });
  });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
