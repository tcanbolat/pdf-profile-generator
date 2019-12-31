# pdf-profile-generator
 command-line application that dynamically generates a PDF profile from a GitHub username.

___________________________________________________________________________________________________________________________________

**how to use:**

1. clone the repo to a local drive
2. run terminal and set path to cloned repo folder
3. in your terminal run the following command: npm install
4. next run the command: node index.js
5. once prompted, enter a GitHub username **This application only works with GitHub usernames, entering anything else into the prompt will result in an error**
6. next, choose a template color
7. wait for conversion to finish and pdf file will be generated in you cloned repo folder. 

____________________________________________________________________________________________________________________________________

You can also view a working example here: https://github.com/tcanbolat/pdf-profile-generator/blob/master/working-example.gif

------------------------------------------------------------------------------------------------------------------------------------

This application displays the GitHub users:
- profile image
- name
- current company
- location
- link to github profile
- link to blog
- Bio
- number of followers
- number following
- public repos
- GitHub Stars

**If any of the info listed above is blank on the users GitHub profile, then the result will be displayed as null on the pdf doc**

