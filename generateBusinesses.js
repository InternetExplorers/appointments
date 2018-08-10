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

const append = (data) => {
  const chunks = [];
  let prevIdx = 0;
  for (let j = 0; j <= data.length; j += 1000000) {
    chunks.push(data.slice(prevIdx, j).join('\n'));
    prevIdx = j;
  }
  for (let i = 1; i <= 10; i += 1) {
    const headers = 'id,name,address,city,state,zip,phone,opens,closes,guest_max\n';
    fs.appendFileSync(`businesses${i}.csv`, headers + chunks[i]);
  }
};

const makeUniqueBusinesses = (rounds) => {
  const storage = [];
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
  };
  makeCombos(rounds);
  append(storage);
};

makeUniqueBusinesses(7);
