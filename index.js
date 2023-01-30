

const generatesPrompts = require("./lib/generatesPrompts");

function init() {

    console.log("Answer the following questions to generate your Team Profile file");

    generatesPrompts();

}

init();

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

// new logic
//console.log welcome
// initialise teamdata arr
// prompt manager
// THEN create manager obj -> push to array + START options prompt
// THEN BRANCH into either |||create eng/int -> push to arr -> RETURN to options prompt (recursive? https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/recursive.js)||| OR |||html generation -> file write -> exit|||
// https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/hierarchical.js


// console.log(OUTPUT_DIR);