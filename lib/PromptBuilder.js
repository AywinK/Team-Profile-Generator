//
const Prompt = require("./Prompt");



class PromptBuilder {

    #promptsArr = [];

    constructor(employeeType) {
        this.employeeType = employeeType;
    }

    createNamePrompt() {
        const prompt = new Prompt("name", `What is the ${this.employeeType}'s name?`);
        prompt.validateName();
        this.#promptsArr.push(Object.assign({}, prompt));
        // console.log(this.#promptsArr);
        return this
    }

    createIdPrompt() {
        const prompt = new Prompt("id", `What is the ${this.employeeType}'s employee ID?`);
        prompt.validateNum();
        this.#promptsArr.push(Object.assign({}, prompt));
        // console.log(this.#promptsArr);
        return this
    }

    createEmailPrompt() {
        const prompt = new Prompt("email", `What is the ${this.employeeType}'s email address?`);
        prompt.validateEmail();
        this.#promptsArr.push(Object.assign({}, prompt));
        // console.log(this.#promptsArr);
        return this
    }

    createOfficeNumberPrompt() {
        const prompt = new Prompt("officeNumber", `What is the ${this.employeeType}'s office number?`);
        prompt.validateEmail();
        this.#promptsArr.push(Object.assign({}, prompt));
        // console.log(this.#promptsArr);
        return this
    }

    createGithubPrompt() {
        const prompt = new Prompt("github", `What is the ${this.employeeType}'s GitHub username?`);
        prompt.validateEmail();
        this.#promptsArr.push(Object.assign({}, prompt));
        // console.log(this.#promptsArr);
        return this
    }

    createSchoolPrompt() {
        const prompt = new Prompt("school", `What is the ${this.employeeType}'s school?`);
        prompt.validateEmail();
        this.#promptsArr.push(Object.assign({}, prompt));
        // console.log(this.#promptsArr);
        return this
    }

    createPromptsArr() {
        return this.#promptsArr
    }
}


// const test = new PromptBuilder("team manager");

// console.log(test.createNamePrompt().createIdPrompt().createEmailPrompt().createOfficeNumberPrompt().createGithubPrompt().createSchoolPrompt().createPromptsArr());

// console.log(Prompt.prototype);

module.exports = PromptBuilder;