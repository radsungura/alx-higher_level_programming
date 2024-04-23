#!/usr/bin/node

const request = require('request');
const episode = process.argv[2];
const API = 'https://swapi-api.hbtn.io/api/films/';

request(API + episode, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    const responseJSON = JSON.parse(body);
    console.log(responseJSON.title);
  } else {
    console.log('Error code: ' + response.statusCode);
  }
});
