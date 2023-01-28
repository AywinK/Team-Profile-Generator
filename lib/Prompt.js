//


class Prompt {

    constructor(name, message, type, choicesArr) {
        (type ? this.type = type : delete this.type)
        this.name = name;
        this.message = message;
        (choicesArr ? this.choices = choicesArr : delete this.choices)
    }

}

module.exports = Prompt;