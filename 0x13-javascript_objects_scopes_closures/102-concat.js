#!/usr/bin/node
const fs = require('fs');

const fArg = fs.readFileSync(process.argv[1]).toString();
const sArg = fs.readFileSync(process.argv[2]).toString();
fs.writeFileSync(process.argv[3], fArg + sArg);
