const inquirer = require("inquirer");
const generateHTML = require("./generateHTML.js");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
      {
          type: "input",
          name: "name",
          message: "what is your gitHub username?"
      }  
    ]);
}

promptUser()
.then( (answer)=> {
console.log(answer.name)
});

const questions = [
  
];

function writeToFile(fileName, data) {
 
}

function init() {
}
init();
