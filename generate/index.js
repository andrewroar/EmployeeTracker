const inquirer = require("inquirer");
const fs = require("fs");
let IsHTMLExist = false;
question = [
  {
    type: "list",
    name: "title",
    message: "What is your employee title",
    choices: ["Employee", "Engineer", "Manager", "Intern"],
  },
];

/////This function is just to rap up the html generated////
function wrappingUpHTML() {
  return `
</body>

</html>
`;
}

////////These functions generate/append the information into the html////
const createEmployee = function () {
  const inquirer = require("inquirer");
  const Employee = require("../lib/Employee");
  const fs = require("fs");
  const EmployeeTemplate = require("../templates/EmployeeTemplate");

  questionsforEmployee = [
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

  ///////////If User do not wish to add a new employee, continue will be false
  let constinue = true;

  ////////////
  const generateHTMLEmployee = () => {
    inquirer
      .prompt(questionsforEmployee)
      .then((respond) => {
        const userInfo = new Employee(respond.name, respond.id, respond.email);
        constinue = respond.again;

        return userInfo;
      })
      .then((userInfo) => {
        if (!IsHTMLExist) {
          IsHTMLExist = true;
          fs.writeFile("../index.html", EmployeeTemplate(userInfo), (err) => {
            if (err) {
              return console.log(err);
            }
          });
        } else {
          fs.appendFileSync("../index.html", appendEmployee(userInfo));
        }

        if (constinue) {
          generateIndex();
        } else {
          fs.appendFileSync("../index.html", wrappingUpHTML());
        }
      });
  };

  generateHTMLEmployee();
};

const createIntern = function () {
  const Intern = require("../lib/Intern");
  const InternTemplate = require("../templates/InternTemplate");

  questionsIntern = [
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

  ///////////If User do not wish to add a new Intern, continue will be false
  let constinue = true;

  ////////////
  const generateHTMLIntern = () => {
    inquirer
      .prompt(questionsIntern)
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
        if (!IsHTMLExist) {
          IsHTMLExist = true;
          fs.writeFile("../index.html", InternTemplate(userInfo), (err) => {
            if (err) {
            }
          });
        } else {
          fs.appendFileSync("../index.html", appendIntern(userInfo));
        }

        if (constinue) {
          generateIndex();
        } else {
          fs.appendFileSync("../index.html", wrappingUpHTML());
        }
      });
  };

  generateHTMLIntern();
};

const createManager = function () {
  const Manager = require("../lib/Manager");
  const ManagerTemplate = require("../templates/ManagerTemplate");

  questionsManager = [
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

  ///////////If User do not wish to add a new engineer, continue will be false
  let constinue = true;

  ////////////
  const generateHTMLManager = () => {
    inquirer
      .prompt(questionsManager)
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
        if (!IsHTMLExist) {
          fs.writeFile("../index.html", ManagerTemplate(userInfo), (err) => {
            if (err) {
              return console.log(err);
            }
            IsHTMLExist = true;
          });
        } else {
          fs.appendFileSync("../index.html", appendManager(userInfo));
        }

        if (constinue) {
          generateIndex();
        } else {
          fs.appendFileSync("../index.html", wrappingUpHTML());
        }
      });
  };
  generateHTMLManager();
};

const createEngineer = function () {
  const Engineer = require("../lib/Engineer");
  const EngineerTemplate = require("../templates/EngineerTemplate");

  questionsEngineer = [
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

  ////////////
  const generateHTMLEngineer = () => {
    inquirer
      .prompt(questionsEngineer)
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
        if (!IsHTMLExist) {
          IsHTMLExist = true;
          fs.writeFile("../index.html", EngineerTemplate(userInfo), (err) => {
            if (err) {
              return console.log(err);
            }
          });
        } else {
          fs.appendFileSync("../index.html", appendEngineer(userInfo));
        }

        if (constinue) {
          generateIndex();
        } else {
          fs.appendFileSync("../index.html", wrappingUpHTML());
        }
      });
  };
  generateHTMLEngineer();
};

/////////////////////
const generateIndex = () => {
  inquirer.prompt(question).then((data) => {
    if (data.title === "Employee") {
      console.log("run employee");
      createEmployee();
    } else if (data.title === "Intern") {
      console.log("run intern");
      createIntern();
    } else if (data.title === "Manager") {
      console.log("run Manager");
      createManager();
    } else {
      console.log("run Engineer");
      createEngineer();
    }
  });
};

generateIndex();
