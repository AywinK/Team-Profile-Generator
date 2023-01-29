//

// const Prompt = require("./Prompt");
// pretend class with prototype methods
const PromptValidationBehaviour = {

    validateNum() {

        this.validate = userInput => (typeof userInput ? "Number" : "Invalid input. Please provide a number."); //checks if input type is number
        
        return this
    },

    validateEmail() {

        this.validate = userInput => {

            const includesAtSymbol = userInput.includes("@", 1); // doesnt hopefully start with @
            const includesPeriodSymbol = userInput.includes(".", 2); //period should be after @

            if (includesAtSymbol && includesPeriodSymbol) return true

            return "Invalid input. Please provide a valid email address."
        }

        return this
    },

    validateGithubUsername() {

        this.validate = userInput => {

            const includesSpaceChar = (" ").test(userInput);

            if (typeof userInput === "string" && !includesSpaceChar) return true

            return "Invalid input. Please provide a valid GitHub Username."
        }

        return this
    },

    validateName() {

        this.validate = userInput => {

            if (userInput && (typeof userInput === "String")) return true

            return "Invalid input. Enter a valid name"
        }

        return this
    }
}

// Object.assign(Prompt.prototype, PromptValidationBehaviour);

// const testss = new Prompt("name", "what is your name");

// console.log(testss.validateName())

module.exports = PromptValidationBehaviour;