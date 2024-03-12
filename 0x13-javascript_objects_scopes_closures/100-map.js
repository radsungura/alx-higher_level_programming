#!/usr/bin/node
const list = require('./100-data.js').list;

console.log(list, list.map((item, index) => item * index));
