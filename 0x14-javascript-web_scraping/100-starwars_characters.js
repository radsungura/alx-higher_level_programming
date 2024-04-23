#!/usr/bin/node

const require = require('request');
const Id = process.argv[2];
const API = 'https://swapi-api.hbtn.io/api/films/';
require.get(API + Id, function (error, res, body) {
  if (error) {
    console.log(error);
  }
  const res = JSON.parse(body);
  const characters = res.characters;
  for (const i of characters) {
    require.get(i, function (error, res, body1) {
      if (error) {
        console.log(error);
      }
      const character = JSON.parse(body1);
      console.log(character.name);
    });
  }
});
