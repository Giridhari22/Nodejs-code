// const chalk = require("chalk");
const validator = require ("validator");
// npm - node package manager helps to use beautiful package which is already created by node
// we use npm init
// now we install a package "chalk" by writing in terminal - npm i chalk



// console.log(chalk.red.underline.inverse("hello"));
// console.log(chalk.blue("Hello world"));
const res = validator.isEmail("giri@giri.com");
console.log(res);

// uncomplete video