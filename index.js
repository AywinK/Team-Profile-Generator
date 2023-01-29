const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

//console log welcome message
//create teamdata array
//prompt for manager details
//create manager obj
//push to arr
//------------------everything under here loops forever until process.exit----------
//booleon running = true
//optionsprompt - maybe in function?
//process prompt data and branch off temp.
//BRANCH OFF : create obj for eng/int using class - this happens in a switch statement??
//BRANCH : push to teamdata arr
//BRANCH : back to options
//RETURN TO PATH : finish option ----------------------------------
//running = false (stop while loop)
//html = render(teamdata)
//right to file
//console log closing screen
//process.exit