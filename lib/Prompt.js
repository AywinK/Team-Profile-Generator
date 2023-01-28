//

const PromptValidationBehaviour = require("./PromptValidationBehaviour")

class Prompt {

    constructor(name, message, type, choicesArr) {
        (type ? this.type = type : delete this.type)
        this.name = name;
        this.message = message;
        (choicesArr ? this.choices = choicesArr : delete this.choices)
    }

    cloneObj_unlinkPrototypeChain () {
        return Object.assign({}, this)
    }

}

Object.assign(Prompt.prototype, PromptValidationBehaviour);

const testss = new Prompt("name", "what is your name");

// testss.cloneObj_unlinkPrototypeChain();

testss.validateName()

console.log(testss)



module.exports = Prompt;