const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer"); 
const createPage = require("./src/template");
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
        const newManager = new Manager(
            team.length +1,
            managerInput.name,
            managerInput.email,
            managerInput.id,
            managerInput.officeNumber
        )
        team.push(newManager)
        
    })
}

const addEngineer = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "email",
            message: "what is the engineer's email?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github username?"
        }
    ]) 
    .then(engineerInput => {
        
        const newEngineer = new Engineer(
            team.length +1,
            engineerInput.name,
            engineerInput.email,
            engineerInput.id,
            engineerInput.github
        )
        
        team.push(newEngineer)
       
        
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
addEngineer()