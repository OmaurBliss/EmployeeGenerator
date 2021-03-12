const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)








function empRender() {
    const empHTML = (answers) =>
    `
      <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${answers.name}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>{{ role }}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${answers.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${answers.email}">${answers.email}</a></li>
              <li class="list-group-item">Office number: {{}}</li>
          </ul>
      </div>
  </div>
      `;
 
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
        type: "list",
        name: "role",
        message: "What is your role",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((answers) => {
        const empPageContent = empHTML(answers);
    
        fs.writeFile("engineer.html, intern.html, manager.html", empPageContent, (err) =>
          err ? console.log(err) : console.log("Successfully created html!")
        );
      if (answers.choices === "Manager") {
        managerRender();
      } else if (answers.choices === "Engineer") {
        engineerRender();
      } else if (answers.choices === "Intern") {
        internRender();
      }
    });
}
render;

function managerRender() {
    const managerHTML = (answers) =>
    `
      <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${answers.name}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>{{ role }}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${answers.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${answers.email}">${answers.email}</a></li>
              <li class="list-group-item">Office number:${answers.officenumber}</li>
          </ul>
      </div>
  </div>
      `;
      

  inquirer
    .prompt([
      {
        type: "input",
        name: "officenumber",
        message: "What is your office number?",
      },
    ])
    .then((answers) => {
        empHTML(answers);
        const managerPageContent = managerHTML(answers)
    
        fs.appendFile("manager.html", managerPageContent, (err) =>
          err ? console.log(err) : console.log("Successfully created README.md!")
        );
      });
}

empRender();



function engineerRender() {
    const engineerHTML = (answers) =>

    `
      <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${answers.name}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>{{ role }}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${answers.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${answers.email}">${answers.email}</a></li>
              <li class="list-group-item">Github:${answers.github}</li>
          </ul>
      </div>
  </div>
      `;
      


  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "What is your Github handle?",
      },
    ])
    .then((answers) => {
      
        const engineerPageContent = engineerHTML(answers)
    
        fs.appendFile("engineer.html", engineerPageContent, (err) =>
          err ? console.log(err) : console.log("Successfully created README.md!")
        );
      });
}
empRender();

function internRender() {
  const internHTML = (answers) =>
    `
      <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${answers.name}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>{{ role }}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${answers.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${answers.email}">${answers.email}</a></li>
              <li class="list-group-item">School: ${answers.school}</li>
          </ul>
      </div>
  </div>
      `;

  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "What School do you go to?",
      },
    ])
    .then((answers) => {
       
        const engineerPageContent = engineerHTML(answers)
    
        fs.appendFile("engineer.html", engineerPageContent, (err) =>
          err ? console.log(err) : console.log("Successfully created README.md!")
        );
      });
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
