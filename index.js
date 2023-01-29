const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const PromptBuilder = require("./lib/PromptBuilder");

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

// new logic
//console.log welcome
// initialise teamdata arr
// prompt manager
// THEN create manager obj -> push to array + START options prompt
// THEN BRANCH into either |||create eng/int -> push to arr -> RETURN to options prompt (recursive? https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/recursive.js)||| OR |||html generation -> file write -> exit|||
// https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/hierarchical.js

function init() {
    console.log("Answer the following questions to generate your Team Profile file");

    const teamDataArr = [];

    const managerPromptArr =
        new PromptBuilder("team manager")
            .createNamePrompt()
            .createIdPrompt().
            createEmailPrompt()
            .createOfficeNumberPrompt()
            .createPromptsArr();

    inquirer.prompt(managerPromptArr).then(data => {
        // console.log(data);
        const { name, id, email, officeNumber } = data;
        const managerObj = new Manager(name, id, email, officeNumber);
        teamDataArr.push(managerObj);
        // console.log(teamDataArr);
        generatesMenuPrompt();
    });

    function generatesMenuPrompt() {

        const optionsPromptArr =
        new PromptBuilder()
            .createOptionsPrompt()
            .createPromptsArr();

        inquirer.prompt(optionsPromptArr)
        .then( data => {
            switch (data.options) {
                case "Engineer":
                    generatesEngineerPrompt();
                    break
                    case "Intern":
                        generatesInternPrompt();
                        break
                        case "Finish building the team - Generate Team Profile":
                            console.log(teamDataArr);
                            const renderedHTML = render(teamDataArr);
                            if (!fs.existsSync(OUTPUT_DIR)) {
                                fs.mkdir(OUTPUT_DIR, err => err ? console.error(err) : "");
                            }
                            fs.writeFile(outputPath, renderedHTML, err => err ? console.error(err) : "");
                            process.exit;
                            // startsExitProcess();
            }
        })
    }

    function generatesEngineerPrompt() {

        const engineerPromptArr =
        new PromptBuilder("engineer")
            .createNamePrompt()
            .createIdPrompt().
            createEmailPrompt()
            .createGithubPrompt()
            .createPromptsArr();

        inquirer.prompt(engineerPromptArr)
        .then( data => {
            const {name, id, email, github} = data;
            const engineerObj = new Engineer(name, id, email, github);
            teamDataArr.push(engineerObj);
            generatesMenuPrompt();
        })
    }

    function generatesInternPrompt() {

        const internPromptArr =
        new PromptBuilder("intern")
            .createNamePrompt()
            .createIdPrompt().
            createEmailPrompt()
            .createSchoolPrompt()
            .createPromptsArr();

        inquirer.prompt(internPromptArr)
        .then( data => {
            const {name, id, email, school} = data;
            const internObj = new Intern(name, id, email, school);
            teamDataArr.push(internObj);
            generatesMenuPrompt();
        })
    }
}

init();

// console.log(OUTPUT_DIR);