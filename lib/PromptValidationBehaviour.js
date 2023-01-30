//supposed to be validation behaviour class for various prompt questions but turning it into a class doesn't get added to Prompt class methods
// validation methods can easily be modified here 

// const Prompt = require("./Prompt");
// pretend class with prototype methods
const PromptValidationBehaviour = {

    validateNum() {

        this.validate = userInput => {
            // console.log(userInput);
            // console.log(typeof userInput === "number");

            if (!isNaN(userInput) && userInput > 0) {
                return true
            }

            // const isValid = !isNaN(userInput);

            return "Invalid input. Please provide a number."
        }
    },

    validateEmail() {

        this.validate = userInput => {
            // console.log(userInput);


            const includesAtSymbol = userInput.includes("@", 1); // doesnt hopefully start with @
            const includesPeriodSymbol = userInput.includes(".", 2); //period should be after @

            if (includesAtSymbol && includesPeriodSymbol) return true

            return "Invalid input. Please provide a valid email address."
        }

        return this
    },

    validateGithubUsername() {

        this.validate = userInput => {
            // console.log(userInput);

            const spacesRegExPattern = /\s/g // selects all spaces
            const includesSpaceChar = spacesRegExPattern.test(userInput);

            if (userInput && !includesSpaceChar) {
                return true
            }

            return "Invalid input. Please provide a valid GitHub Username."
        }

        return this
    },

    validateName() {

        this.validate = userInput => {
            // console.log(userInput);

            if (userInput && isNaN(userInput)) return true

            return "Invalid input. Enter a valid name"
        }

        return this
    }
}

// Object.assign(Prompt.prototype, PromptValidationBehaviour);

// const testss = new Prompt("name", "what is your name");

// console.log(testss.validateName())

module.exports = PromptValidationBehaviour;