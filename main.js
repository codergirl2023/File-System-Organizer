#!/usr/bin/env node

let organizeObj=require("./commands/organize");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let process = require("process");
let input = process.argv.slice(2);
let command = input[0]

switch (command) {

    case "tree":
        treeObj.treeKey(input[1]);
        break;

    case "organize":
        console.log(input[1]);
        organizeObj.organizeKey(input[1]);
        break;

    case "help":
        helpObj.helpKey();
        break;

    default:
        console.log("Please 🙏 enter correct command");
}










