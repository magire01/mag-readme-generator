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
        message: "Please enter a description for this app.",
        name: "appDescription"
    },
    {
        type: "input",
        message: "Please provide installation details about this app.",
        name: "appInstall"
    },
    {
        type: "input",
        message: "Please explain the usage of this app.",
        name: "appUsage"
    },
    {
        type: "input",
        message: "Please enter the deployed link to this app",
        name: "appLink"
    },
    {
        type: "input",
        message: "Please enter any guidance for contributors",
        name: "appContribute"
    },
    {
        type: "input",
        message: "Please enter testing information for this app.",
        name: "appTest"
    },
    {
        type: "input",
        message: "Please enter any unanswered questions you have about how this app works.",
        name: "appQuestions"
    }
]).then(({ appName, appPurpose, appDescription, appLink, appImg, appInfo, appAuthor }) => {
    
    const userEntry = `${appName} \n\n Purpose of Application: ${appPurpose} \n\n ${appDescription} \n\n Deployed Link: ${appLink} \n\n Important Info: ${appInfo} \n\n\n Author: ${appAuthor}`

    console.log(userEntry);

    fs.writeFile("README1.md", userEntry, (err) => {
        if(err) {
            return console.log(err);
        } else {
            console.log("Readme Created Successfully!");
        }
    });
});


