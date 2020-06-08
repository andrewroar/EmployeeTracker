const inquirer = require("inquirer");
const Engineer = require("../lib/Engineer");
const fs = require("fs");
const EngineerTemplate = require("../templates/EngineerTemplate");

questions = [
  {
    type: "input",
    name: "name",
    message: "Enter Engineer's name: ",
  },
  {
    type: "input",
    name: "id",
    message: "Enter Engineer's id: ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter Engineer's email: ",
  },
  {
    type: "input",
    name: "github",
    message: "Enter Engineer's github: ",
  },
  {
    type: "confirm",
    name: "again",
    message: "Enter another input? ",
    default: true,
  },
];

///////////

function appendEngineer(userInfo) {
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

            User github: ${userInfo.github}
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
let IsEngineerHTMLExist = false;
////////////
const generateHTMLEngineer = () => {
  inquirer
    .prompt(questions)
    .then((respond) => {
      const userInfo = new Engineer(
        respond.name,
        respond.id,
        respond.email,
        respond.github
      );
      constinue = respond.again;

      return userInfo;
    })
    .then((userInfo) => {
      console.log(userInfo.name);
      if (!IsEngineerHTMLExist) {
        fs.writeFile("../Engineer.html", EngineerTemplate(userInfo), (err) => {
          if (err) {
            return console.log(err);
          }
          IsEngineerHTMLExist = true;
        });
      } else {
        fs.appendFileSync("../Engineer.html", appendEngineer(userInfo));
      }

      if (constinue) {
        generateHTMLEngineer();
      } else {
        fs.appendFileSync("../Engineer.html", wrappingUpHTML());
      }
    });
};

generateHTMLEngineer();
