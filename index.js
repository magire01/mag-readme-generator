const inquirer = require("inquirer");
const fs = require("fs");


//Application Name
//Purpose of app?
//Application Description
//Application HyperLink
//Would you like to add images? Y/N
//Any important information the user needs to know before using?
//Application Author

inquirer.prompt([
    {
        type: "input",
        message: "What is the name of the App?",
        name: "appName"
    },
    {
        type: "input",
        message: "What is the purpose of this app?",
        name: "appPurpose"
    },
    {
        type: "input",
        message: "Please enter a description of this app",
        name: "appDescription"
    },
    {
        type: "input",
        message: "Please enter the deployed link to this app",
        name: "appLink"
    },
    {
        type: "list",
        message: "Would you like to add images?",
        name: "appImg",
        choices: ["yes", "no"]
    },
    {
        type: "input",
        message: "Please include any information the user needs before using the app",
        name: "appInfo"
    },
    {
        type: "input",
        message: "Please enter the Author's name",
        name: "appAuthor"
    }
]).then(({ appName, appPurpose, appDescription, appLink, appImg, appInfo, appAuthor }) => {
    console.log(appName, appPurpose, appDescription, appLink, appImg, appInfo, appAuthor);
});


