#!/usr/bin/env node

const colors = require('colors');
const copy = require("../lib/copyFile");

const arguments = process.argv.splice(2);

if (arguments.length === 0) {
  console.log(colors.red("Please provide a project name"));
  process.exit(1);
} else {
  copy.copy(arguments[0]);
}

// // copy the file
// copy.copy();