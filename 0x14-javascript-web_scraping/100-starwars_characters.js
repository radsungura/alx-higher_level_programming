#!/usr/bin/node

const request = require('request');
const Id = process.argv[2];
const API = 'https://swapi-api.hbtn.io/api/films/';
request.get(API + Id, function (error, res, body) {
  if (error) {
    console.log(error);
  }
  const results = JSON.parse(body);
  const characters = results.characters;
  for (const i of characters) {
    request.get(i, function (error, res, body1) {
      if (error) {
        console.log(error);
      }
      const character = JSON.parse(body1);
      console.log(character.name);
    });
  }
});
