const inquirer = require("inquirer");
const Intern = require("../../lib/Intern");
const fs = require("fs");
const InternTemplate = require("../../templates/InternTemplate");

questions = [
  {
    type: "input",
    name: "name",
    message: "Enter Intern's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter Intern's id: ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter Intern's email: ",
  },
  {
    type: "input",
    name: "school",
    message: "Enter Intern's school:",
  },
  {
    type: "confirm",
    name: "again",
    message: "Enter another input? ",
    default: true,
  },
];

///////////

function appendIntern(userInfo) {
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

          User School: ${userInfo.school}
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

///////////If User do not wish to add a new Intern, continue will be false
let constinue = true;

let IsInternHTMLExist = false;
////////////
const generateHTMLIntern = () => {
  inquirer
    .prompt(questions)
    .then((respond) => {
      const userInfo = new Intern(
        respond.name,
        respond.id,
        respond.email,
        respond.school
      );
      constinue = respond.again;

      return userInfo;
    })
    .then((userInfo) => {
      if (!IsInternHTMLExist) {
        IsInternHTMLExist = true;
        fs.writeFile("../index.html", InternTemplate(userInfo), (err) => {
          if (err) {
          }
        });
      } else {
        //require("..index.html").replace(wrappingUpHTML(), " ");
        fs.appendFileSync("../index.html", appendIntern(userInfo));
      }

      if (constinue) {
        generateHTMLIntern();
      } else {
        fs.appendFileSync("../index.html", wrappingUpHTML());
      }
    });
};

module.exports = generateHTMLIntern();
