const Manager = require("./lib/Manager")
const inquirer = require("inquirer") 
const createPage = require("./src/template")
const fs = require("fs")
let team = []


const addManager = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "email",
            message: "what is the manager's email?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        }
    ]) 
    .then(managerInput => {
        // console.log(managerInput) 
        const newManager = new Manager(
            team.length +1,
            managerInput.name,
            
        )
        team.push(newManager)
        // console.log(team)
        newHTML()
    })
}


const newHTML = () => {
    const pageHTML = createPage(team)
    console.log(pageHTML)
    fs.writeFile("./dist/index.html", pageHTML, (err) => {
        if (err) throw new Error("HTML did not render.", err)
    })
}



addManager()