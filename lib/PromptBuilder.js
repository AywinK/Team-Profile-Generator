//
const Prompt = require("./Prompt");



class PromptBuilder {

    #promptsArr = [];

    constructor(employeeType = "") {
        this.employeeType = employeeType;
    }

    createNamePrompt() {
        const prompt = new Prompt("name", `What is the ${this.employeeType}'s name?`);
        prompt.validateName();
        this.#promptsArr.push(prompt);
        console.log(this.#promptsArr);
        return this
    }

    createIdPrompt() {
        const prompt = new Prompt("id", `What is the ${this.employeeType}'s employee ID?`);
        prompt.validateNum();
        this.#promptsArr.push(prompt);
        // console.log(this.#promptsArr);
        return this
    }

    createEmailPrompt() {
        const prompt = new Prompt("email", `What is the ${this.employeeType}'s email address?`);
        prompt.validateEmail();
        this.#promptsArr.push(prompt);
        // console.log(this.#promptsArr);
        return this
    }

    createOfficeNumberPrompt() {
        const prompt = new Prompt("officeNumber", `What is the ${this.employeeType}'s office number?`);
        prompt.validateNum();
        this.#promptsArr.push(prompt);
        // console.log(this.#promptsArr);
        return this
    }

    createGithubPrompt() {
        const prompt = new Prompt("github", `What is the ${this.employeeType}'s GitHub username?`);
        prompt.validateGithubUsername();
        this.#promptsArr.push(prompt);
        // console.log(this.#promptsArr);
        return this
    }

    createSchoolPrompt() {
        const prompt = new Prompt("school", `What is the ${this.employeeType}'s school?`);
        prompt.validateName();
        this.#promptsArr.push(prompt);
        // console.log(this.#promptsArr);
        return this
    }

    createOptionsPrompt() {
        const prompt = new Prompt("options", "Which type of team member would you like to add next?", "list", ["Engineer", "Intern", "Finish building the team - Generate Team Profile"]);
        this.#promptsArr.push(prompt);
        // console.log(this.#promptsArr);
        return this
    }

    createPromptsArr() {
        return this.#promptsArr
    }
}


// const test = new PromptBuilder("team manager");

// console.log(test.createNamePrompt().createIdPrompt().createEmailPrompt().createOfficeNumberPrompt().createGithubPrompt().createSchoolPrompt().createOptionsPrompt().createPromptsArr());

// console.log(Prompt.prototype);

module.exports = PromptBuilder;