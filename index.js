//WHEN I enter my project title
//THEN this is displayed as the title of the README
//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
//WHEN I choose a license for my application from a list of options
//THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
//WHEN I enter my GitHub username
//THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
//WHEN I enter my email address
//THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
//WHEN I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README





const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
      },
      {
        type: "email",
        name: "email",
        message: "What is your email?",
      },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Decription of your project?",
    },
    {
      type: "input",
      name: "install",
      message: "What command should be run to install dependencies?", //default option npm i 
    },
    {
        type: "input",
        name: "install",
        message: "What command should be run to run tests?", //default npm
      },
    {
      type: "input",
      name: "contribution",
      message: "Any contributions to your project?",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have? (use arrow keys)",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
  ])
console.log(answers)
.then ((answers) => {
    const txtPageContent = generatetxt(answers)

    fs.writeFile("readme.txt", txtPageContent, (err) =>
    err ? console.log(err) : console.log("Successfully created your readme!")
  );
});