#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
console.log(chalk.bgBlue.bold("\nTypescript Quiz Game"));
console.log(chalk.bgRed.bold("\n\nINFORMATION:"));
console.log("- I am a process in your computer.");
console.log("- There is a secret prize at the end if you win the game.");
console.log("- If you get a question wrong, I will die.\n");
let { playername } = await inquirer.prompt([
    {
        message: "Enter your username:",
        type: "input",
        name: "playername",
        default: "Player"
    }
]);
console.log(chalk.bold(`Welcome ${playername}. Let us begin!`));
let firstQ = await inquirer.prompt([
    {
        message: "\nQ1) Which TypeScript feature allows you to describe the shape of an object?",
        type: "list",
        name: "firstQuestion",
        choices: ["A) Classes", "B) Enums", "C) Interfaces", "D) Namespaces"]
    }
]);
const correctStyling = chalk.hex('#37FBB3');
const incorrectStyling = chalk.bgRed;
const secretStyling = chalkAnimation.glitch;
if (firstQ.firstQuestion === "C) Interfaces") {
    console.log(correctStyling(`Correct Answer, ${playername}!`));
    let secondQ = await inquirer.prompt([
        {
            message: "\nQ2) How can you declare an optional property in a TypeScript interface?",
            type: "list",
            name: "secondQuestion",
            choices: ["A) By using the `optional` keyword", "B) By ending the property name with a question mark (`?`)", "C) By setting the property to `null`", "D) By using the `maybe` keyword"]
        }
    ]);
    if (secondQ.secondQuestion === "B) By ending the property name with a question mark (`?`)") {
        console.log(correctStyling(`Correct Answer, ${playername}!`));
        let thirdQ = await inquirer.prompt([
            {
                message: "\nQ3) What is a union type in TypeScript?",
                type: "list",
                name: "thirdQuestion",
                choices: ["A) A type that can be any value", "B) A type that can be one of several types", "C) A type that can be an object", "D) A type that can be both a string and a number simultaneously"]
            }
        ]);
        if (thirdQ.thirdQuestion === "B) A type that can be one of several types") {
            console.log(correctStyling(`Correct Answer, ${playername}!`));
            let fourthQ = await inquirer.prompt([
                {
                    message: "\nQ4) What is the purpose of a constructor in TypeScript classes?",
                    type: "list",
                    name: "fourthQuestion",
                    choices: ["A) To create a static method", "B) To initialize object properties", "C) To destroy an object", "D) To run asynchronous code"]
                }
            ]);
            if (fourthQ.fourthQuestion === "B) To initialize object properties") {
                console.log(correctStyling(`Correct Answer, ${playername}!`));
                let fifthQ = await inquirer.prompt([
                    {
                        message: "\nQ5) Which command would you use to install TypeScript globally using npm?",
                        type: "list",
                        name: "fifthQuestion",
                        choices: ["A) npm install typescript", "B) npm global install typescript", "C) npm install -g typescript", "D) npm typescript install global"]
                    }
                ]);
                if (fifthQ.fifthQuestion === "C) npm install -g typescript") {
                    console.log(correctStyling(`Correct Answer, ${playername}!`));
                    let sixthQ = await inquirer.prompt([
                        {
                            message: "\nQ6) What is the purpose of the 'as' keyword in TypeScript?",
                            type: "list",
                            name: "sixthQuestion",
                            choices: ["A) To define a new alias for a type", "B) To specify an asynchronous function", "C) To import external modules", "D) To cast one type to another type"]
                        }
                    ]);
                    if (sixthQ.sixthQuestion === "D) To cast one type to another type") {
                        console.log(correctStyling(`Correct Answer, ${playername}! LAST QUESTION:`));
                        let seventhQ = await inquirer.prompt([
                            {
                                message: "\nQ7) When was TypeScript first publicly announced by Microsoft?",
                                type: "list",
                                name: "seventhQuestion",
                                choices: ["A) June 2012", "B) April 2013", "C) January 2012", "D) October 2012"]
                            }
                        ]);
                        if (seventhQ.seventhQuestion === "A) June 2012") {
                            secretStyling((`\nThere was no prize, you're scammed\n`));
                        }
                    }
                    else {
                        console.log(incorrectStyling.bold("Process died 💀💀💀, Game Ended!"));
                    }
                }
                else {
                    console.log(incorrectStyling.bold("Process died 💀💀💀, Game Ended!"));
                }
            }
            else {
                console.log(incorrectStyling.bold("Process died 💀💀💀, Game Ended!"));
            }
        }
        else {
            console.log(incorrectStyling.bold("Process died 💀💀💀, Game Ended!"));
        }
    }
    else {
        console.log(incorrectStyling.bold("Process died 💀💀💀, Game Ended!"));
    }
}
else {
    console.log(incorrectStyling.bold("Process died 💀💀💀, Game Ended!"));
}
