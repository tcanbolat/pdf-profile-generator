const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const convertFactory = require('electron-html-to');
const generateHTML = require("./generateHTML");

const writeFileAsync = util.promisify(fs.writeFile);

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
    axios.get(starsUrl).then(function(stars) {

    html = generateHTML(data, res, stars);
      writeFileAsync("index.html", html);

    })
     });

  }).catch( (err) => {
    console.log(err);



  });

  // var conversion = convertFactory({
  //   converterPath: convertFactory.converters.PDF
  // });
   
  // conversion({ html: '<h1>Hello World</h1>' }, function(err, result) {
  //   if (err) {
  //     return console.error(err);
  //   }
   
  //   console.log(result.numberOfPages);
  //   console.log(result.logs);
  //   result.stream.pipe(fs.createWriteStream('/path/to/anywhere.pdf'));
  //   conversion.kill(); // necessary if you use the electron-server strategy, see bellow for details
  // });




// function init() {
// }
// init();
