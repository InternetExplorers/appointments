const fs = require('fs');

const faker = require('faker');

const randomNumber = (min = 0, max = 9) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomPhoneNumber = () => {
  let number = '(';
  for (let i = 0; i < 10; i += 1) {
    number += randomNumber();
    if (i === 2) number += ')';
    if (i === 5) number += '-';
  }
  return number;
};

const makeUsers = () => {
  let users = [];
  let id = 1;
  for (let i = 1; i <= 20000000; i += 1) {
    users.push([faker.name.firstName(), faker.name.lastName(), randomPhoneNumber(),
      faker.internet.email()]);
    if (i % 2000000 === 0) {
      fs.appendFileSync(`data/users/users${id}.csv`, users.join('\n'));
      users = [];
      id += 1;
    }
  }
};

makeUsers();
