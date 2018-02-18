var inquirer = require('inquirer');
// Constructor
function Programmer(name, position, age, language) {
    // Properties, key = value;
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;
    // Method
    this.printInfo = function () {
        console.log("Name : " + this.name + "\nPosition :" + this.position + "\nAge :" + this.age + "\nLanguage :" + this.language);
    }
}
// to ask more questions, do not use forLoop
var count = 0;
var askQuestion = function () {
    if (count < 2) {
        // ([{}]) array, object
        inquirer.prompt([{
            name: "name",
            message: "What is your name?"
        }, {
            name: "position",
            message: "What is your position?"
        }, {
            name: "age",
            message: "What is your message?"

        }, {
            name: "language",
            message: "What is your favorite programming language?"
        }]).then(function (answers) {
            var newGuy = new Programmer(answers.name, answers.position, answers.age, answers.language);
            newGuy.printInfo();

            count++;
            // loop back through and ask questions another time.
            askQuestion();
        })
    } else {
        console.log("all done!");
    }
}
// make sure to run the function
askQuestion();