const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeArr = [];


function empRender() {


  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Which employee do you want to add?",
        choices: ["Manager", "Engineer", "Intern", "End"],
      },
    ])
    .then((answers) => {
  
      if (answers.role === "Manager") {
        managerRender();
      } else if (answers.role === "Engineer") {
        engineerRender();
      } else if (answers.role === "Intern") {
        internRender();
      } else if (answers.role === "End") {
        createTeam();
      }
    });
}


function managerRender() {


  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your work id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "officenumber",
        message: "What is your office number?",
      },
    ])
    .then((answers) => {
 
      const managerObj = new Manager(answers.name, answers.id, answers.email, answers.officenumber);
      employeeArr.push(managerObj);
      empRender();
    });
}



function engineerRender() {

  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your work id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your Github handle?",
      },
    ])
    .then((answers) => {
    
      const engineerObj = new Engineer(answers.name, answers.id, answers.email, answers.github);
      employeeArr.push(engineerObj);
      empRender();
    });
}

function internRender() {
  //   const internHTML = (answers) =>
  //     `
  //       <div class="card employee-card">
  //       <div class="card-header">
  //           <h2 class="card-title">${answers.name}</h2>
  //           <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>{{ role }}</h3>
  //       </div>
  //       <div class="card-body">
  //           <ul class="list-group">
  //               <li class="list-group-item">ID: ${answers.id}</li>
  //               <li class="list-group-item">Email: <a href="mailto:${answers.email}">${answers.email}</a></li>
  //               <li class="list-group-item">School: ${answers.school}</li>
  //           </ul>
  //       </div>
  //   </div>
  //       `;

  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your work id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What School do you go to?",
      },
    ])
    .then((answers) => {
      //   const engineerPageContent = engineerHTML(answers);
      //   fs.appendFile("engineer.html", engineerPageContent, (err) =>
      //     err ? console.log(err) : console.log("Successfully created README.md!")
      //   );
      const internObj = new Intern(answers.name, answers.id, answers.email, answers.school);
      employeeArr.push(internObj);
      empRender();
    });
}

function createTeam() {
  fs.writeFile(outputPath, render(employeeArr), (err) =>
    err ? console.log(err) : console.log("Successfully created html!")
  );
}

empRender();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
