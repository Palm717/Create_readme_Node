//FIRST I INCLUDE THE FS READ AND WRITE FILE LIBRARY PROVIDED BY JAVASCRIPT -- WILL BE USED TO CREATE THE README FILE LATER ON
const fs = require("fs");

//BROUGHT IN THE INQUIRER NPM TO USE ITS PROMPT TOOL TO GAIN INFORMATION FROM OUR USER TO CREATE THEIR README MARKDOWN PAGE
const inquirer = require("inquirer");

//i AM BRINGING IN -- generateMarkdown() -- FROM -- generateMarkdown.js -- TO UTILIZE THE TEMPLATE LITERAL WITHIN ITS CODE BLOCK
const markdown = require("./utils/generateMarkdown");

//AS STATED ABOVE THE -- inquirer.prompt() -- IS BEING CALLED UPON TO RUN A SERIES OF QUESTION AND CHOICE PROMPTS TO GAIN INFORMATION ABOUT OUR USERS INTENTIONS FOR CREATING THE APPLICATION TO BE APPLIED IN A NEWLY CREATED README MARKDOWN FILE
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
    //AFTER I USE -- inquirer.prompt(); -- I AM PROVIDED WITH A PROMISE -- .then() --  TO RETURN THE ANSWERS BACK TO ME AS AN ACCESSIBLE OBJECT
    console.log(answerObj);

    //I AM NOW CALLING ON THE FS READ AND WRITE LIBRARY TO USE -- writeFile() -- WHICH TAKES A FILE TO BE CREATED AND 2 ARGUMENTS
    //THE FIRST ARGUMENT IS PULLING THE TEMPLATE LITERAL FROM -- generateMarkdown(); -- W/I -- generateMarkdown.js --AND ANOTHER FUNCTION THAT RETURNS AN 'UNSUCCESSFUL' LOG IF THE FILE DID NOT CREATE AND A 'SUCCESS' LOG IF IT DID CREATE

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
