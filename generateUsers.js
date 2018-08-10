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

const append = (users) => {
  const userGroups = [];
  let prevIdx = 0;
  for (let j = 0; j <= users.length; j += 2000000) {
    userGroups.push(users.slice(prevIdx, j).join('\n'));
    prevIdx = j;
  }
  for (let i = 1; i <= 10; i += 1) {
    const headers = 'id,first_name,last_name,phone,email\n';
    fs.appendFileSync(`data/users/users${i}.csv`, headers + userGroups[i]);
  }
};

const makeUsers = () => {
  const users = [];
  for (let i = 1; i <= 20000000; i += 1) {
    users.push([i, faker.name.firstName(), faker.name.lastName(),
      randomPhoneNumber(), faker.internet.email()]);
  }
  append(users);
};

makeUsers();
