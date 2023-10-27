const fs = require("fs");
const inquirer = require("inquirer");
const pkg = require("./package");
let major = 0, minor = 0, patch = 0;
inquirer.prompt([
  {
    type: "list",
    name: "type",
    message: "Which release is this?",
    choices: ["major", "minor", "patch"]
  }
])
.then(({ type }) => {
  versionConfig(type);
});
