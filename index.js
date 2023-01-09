const Manager = require("./lib/Manager")
const inquirer = require("inquirer") 
const createPage = require("./template")

let team = []


const addManager = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
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
}



addManager()