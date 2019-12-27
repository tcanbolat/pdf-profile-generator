const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
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
    axios.get(queryUrl, starsUrl).then( (res, stars) => {
      html = generateHTML(data, res, stars);
      writeFileAsync("index.html", html);
    //  console.log(res.data);
      console.log(res.data.login); 
      console.log(res.data.location);
      console.log(res.data.url);
      console.log(res.data.blog);
      console.log(res.data.bio);
      console.log(res.data.public_repos);
      console.log(res.data.followers);
      console.log(res.data.following);
     // console.log(stars.data);
    })
   
    // axios.get(starsUrl).then(function(stars) {
      

      
    // });


  }).catch( (err) => {
    console.log(err);

  });




// function init() {
// }
// init();
