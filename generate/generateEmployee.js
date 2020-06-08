const inquirer = require("inquirer");
const Employee = require("../lib/Employee");
const fs = require("fs");
const EmployeeTemplate = require("../templates/EmployTemplate");

questions = [
  {
    type: "input",
    name: "name",
    message: "Enter Employee's name: ",
  },
  {
    type: "input",
    name: "id",
    message: "Enter Employee's id: ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter Employee's email: ",
  },
  {
    type: "confirm",
    name: "again",
    message: "Enter another input? ",
    default: true,
  },
];

///////////

function appendEmployee(userInfo) {
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

///////////If User do not wish to add a new employee, continue will be false
let constinue = true;
let IsEmployeeHTMLExist = false;
////////////
const generateHTMLEmployee = () => {
  inquirer
    .prompt(questions)
    .then((respond) => {
      const userInfo = new Employee(respond.name, respond.id, respond.email);
      constinue = respond.again;

      return userInfo;
    })
    .then((userInfo) => {
      console.log(userInfo.name);
      if (!IsEmployeeHTMLExist) {
        fs.writeFile("../Employee.html", EmployeeTemplate(userInfo), (err) => {
          if (err) {
            return console.log(err);
          }
          IsEmployeeHTMLExist = true;
        });
        console.log(constinue);
      } else {
        fs.appendFileSync("../Employee.html", appendEmployee(userInfo));
      }

      if (constinue) {
        generateHTMLEmployee();
      } else {
        fs.appendFileSync("../Employee.html", wrappingUpHTML());
      }
    });
};

generateHTMLEmployee();
