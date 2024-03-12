#!/usr/bin/node
const dict = require('./101-data').dict;

const originl = Object.entries(dict);
const val = Object.values(dict);                                            const valObj = [new Set(values)];
const newDict = {}; 
for (const i in valObj){
	const list = []; 
	for (const j in originl){ 
		if(originl[j][1] === valObj[i]){
			list.unshift(originl[j][0]);
		}
	} 
	newDict[valObj[i]] = list;
} 
console.log(newDict);
