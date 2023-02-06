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
            managerInput.name,
            managerInput.email,
            managerInput.id,
            managerInput.officeNumber
        )
        team.push(newManager)
        employeeList();
    });
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
            engineerInput.name,
            engineerInput.email,
            engineerInput.id,
            engineerInput.github
        )
        
        team.push(newEngineer)
        employeeList();
        
    });
}

const addIntern = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "email",
            message: "what is the intern's email?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?"
        }
    ]) 
    .then(internInput => {
        
        const newIntern = new Intern(
            internInput.name,
            internInput.email,
            internInput.id,
            internInput.school
        )
        
        team.push(newIntern)
        employeeList();
        
    });
}

const employeeList = () => {
    inquirer
    .prompt({
        type: "list",
        name: "employeeTitle",
        message: "Which employee whould you like to add?",
        choices: ["Engineer", "Intern","Complete"]
    })
        .then((employeeInput) => {
            if(employeeInput.employeeTitle === "Engineer") {
                addEngineer();
            }
            if(employeeInput.employeeTitle === "Intern") {
                addIntern();
            }
            if(employeeInput.employeeTitle === "Complete") {
                newHTML();
            }

    });
}
const newHTML = () => {
    const pageHTML = createPage(team)
    console.log(pageHTML)
    fs.writeFile("./dist/index.html", pageHTML, (err) => {
        if (err) throw new Error("HTML did not render.", err)
    });
}


addManager();