const fs = require('fs');

const faker = require('faker');

const adj = [
  'Tasty',
  'Gorgeous',
  'Awesome',
  'Unbranded',
  'Handcrafted',
  'Small',
  'Incredible',
  'Ergonomic',
  'Refined',
  'Licensed',
];

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

const makeUniqueBusinesses = (rounds) => {
  let storage = [];
  let id = 1;
  const makeCombos = (counter, combo = []) => {
    if (!counter) {
      storage.push([id, combo.join(' '), faker.address.streetAddress(), faker.address.city(), faker.address.stateAbbr(), faker.address.zipCode(), randomPhoneNumber(), `${randomNumber(7, 12)}:00:00`, `${randomNumber(19, 24)}:00:00`, randomNumber(3, 10)]);
      id += 1;
    } else {
      for (let i = 0; i < adj.length; i += 1) {
        const element = adj[i];
        makeCombos(counter - 1, combo.concat(element));
      }
    }
    if ((id - 1) % 1000000 === 0) {
      fs.appendFileSync(`data/businesses/businesses${Math.round(id / 1000000)}.csv`, storage.join('\n'));
      storage = [];
    }
  };
  makeCombos(rounds);
};

makeUniqueBusinesses(7);
