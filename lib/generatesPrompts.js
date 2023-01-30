
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const PromptBuilder = require("./PromptBuilder");

const render = require("../src/page-template.js");

function generatesPrompts() {
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
            .then(data => {
                switch (data.options) {
                    case "Engineer":
                        generatesEngineerPrompt();
                        break
                    case "Intern":
                        generatesInternPrompt();
                        break
                    case "Finish building the team - Generate Team Profile":
                        console.log(teamDataArr);
                        const OUTPUT_DIR = path.resolve(__dirname, "../output");
                        const outputPath = path.join(OUTPUT_DIR, "team.html");
                        const renderedHTML = render(teamDataArr);
                        if (!fs.existsSync(OUTPUT_DIR)) {
                            fs.mkdir(OUTPUT_DIR, err => err ? console.error(err) : "");
                        }
                        fs.writeFile(outputPath, renderedHTML, err => err ? console.error(err) : "");
                        console.log("Team profile successfully generated.")
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
            .then(data => {
                const { name, id, email, github } = data;
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
            .then(data => {
                const { name, id, email, school } = data;
                const internObj = new Intern(name, id, email, school);
                teamDataArr.push(internObj);
                generatesMenuPrompt();
            })
    }
}

module.exports = generatesPrompts;