const inquirer = require("inquirer");
const Manager = require("../../lib/Manager");
const fs = require("fs");
const ManagerTemplate = require("../../templates/ManagerTemplate");

questions = [
  {
    type: "input",
    name: "name",
    message: "Enter Manager's name: ",
  },
  {
    type: "input",
    name: "id",
    message: "Enter Manager's id: ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter Manager's email: ",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter Manager's Office Number: ",
  },
  {
    type: "confirm",
    name: "again",
    message: "Enter another input? ",
    default: true,
  },
];

///////////

function appendManager(userInfo) {
  return `      
    <div class="container-fluid">
    <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading">
            <h1 class="text-center">${userInfo.name}</h1>
        </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            User ID: ${userInfo.id}
            
            User Email: ${userInfo.email}

            User Office: ${userInfo.officeNumber}
        </div>
    </div>
  </div>`;
}

function wrappingUpHTML() {
  return `
    </body>
    
    </html>
    `;
}

///////////If User do not wish to add a new engineer, continue will be false
let constinue = true;
let IsManagerHTMLExist = false;
////////////
const generateHTMLManager = () => {
  inquirer
    .prompt(questions)
    .then((respond) => {
      const userInfo = new Manager(
        respond.name,
        respond.id,
        respond.email,
        respond.officeNumber
      );
      constinue = respond.again;

      return userInfo;
    })
    .then((userInfo) => {
      if (!IsManagerHTMLExist) {
        fs.writeFile("../index.html", ManagerTemplate(userInfo), (err) => {
          if (err) {
            return console.log(err);
          }
          IsEngineerHTMLExist = true;
        });
      } else {
        fs.appendFileSync("../index.html", appendManager(userInfo));
      }

      if (constinue) {
        generateHTMLManager();
      } else {
        fs.appendFileSync("../index.html", wrappingUpHTML());
      }
    });
};

module.exports = generateHTMLManager();
