const inquirer = require("inquirer");
const electron = require("electron");
const fs = require('fs')
const convertFactory = require('electron-html-to');
const util = require("util");
const axios = require("axios");
const generateHTML = require("./generateHTML");

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "what is your gitHub username?"
    },
    {
      type: "list",
      name: "color",
      message: "What color would you like your profile's template to be?",
      choices: [
        "green",
        "blue",
        "pink",
        "red"
      ]
    },
  ]);
};
promptUser()

  .then( (data) => {
    const queryUrl = `https://api.github.com/users/${data.name}`;
    const starsUrl = `https://api.github.com/users/${data.name}/starred`;

    axios.get(queryUrl).then( (res) => {
    axios.get(starsUrl).then( (stars) => {

    html = generateHTML(data, res, stars);
      writeFileAsync("index.html", html);

    }).then( () => {

      readFileAsync("index.html", "utf8").then( (htmlString) => {

        const conversion = convertFactory( {
          converterPath: convertFactory.converters.PDF
        });
  
        conversion({ html: htmlString }, function(err, result) {
          if (err) {
            return console.error(err);
          }
          console.log(result.logs);
          console.log("PDF Pages: " + result.numberOfPages);
          result.stream.pipe(fs.createWriteStream('gitHubProfile.pdf'));
          conversion.kill();
        });

      })

    })

     });
  }).catch( (err) => {
    console.log(err);
  });
