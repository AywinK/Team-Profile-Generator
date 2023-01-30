//class to create each question

const PromptValidationBehaviour = require("./PromptValidationBehaviour")

class Prompt {

    constructor(name, message, type, choicesArr) {
        (type ? this.type = type : delete this.type)
        this.name = name;
        this.message = message;
        (choicesArr ? this.choices = choicesArr : delete this.choices)
    }

    // cloneObj_unlinkPrototypeChain () {
    //     return Object.assign({}, this)
    // }

}

// console.log(Prompt.prototype);

// const tempObjPropsHold = Object.assign({}, , Prompt.prototype);

Object.assign(Prompt.prototype, PromptValidationBehaviour);

// const testss = new Prompt("name", "what is your name");

// testss.validateGithubUsername();

// testss.cloneObj_unlinkPrototypeChain();

// console.log(testss);




module.exports = Prompt;