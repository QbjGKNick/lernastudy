const path = require("path");
const fs = require("fs-extra");
const execa = require("execa"); // child_process

class InitCommand {
  constructor(options) {
    this.options = options;
    this.rootPath = path.resolve();
  }

  async execute() {
    console.log("Initializing Git repository");
    await execa("git", ["init"], { stdio: "pipe" }); // 初始化git仓库
  }
}

function factory(argv) {
  new InitCommand(argv);
}

module.exports = factory;
