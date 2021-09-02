"use strict";
module.exports = main;
const cli = require("@lerna2/cli");
const initCmd = require("@lerna2/init");
// const createCmd = require("@lerna2/create/command")

function main(argv) {
  // cli返回的是yargs的实例
  // 配置init命令
  // 执行解析
  return cli().command(initCmd).parse(argv);
}
