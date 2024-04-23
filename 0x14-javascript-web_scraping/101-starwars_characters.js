#!/usr/bin/node
const request = require('request');
const API = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];
request(API, function (error, response, body) {
  if (error) {
	  console.log(error);
  }
  else{
    const characters = JSON.parse(body).characters;
    printChr(characters, 0);
  }
});

function printChr (characters, i) {
  request(characters[i], function (error, response, body) {
    if (error) {
      console.log(error);
    }
    else{
      console.log(JSON.parse(body).name);
      if (i + 1 < characters.length) {
        printChr(characters, i + 1);
      }
    }
  });
}
