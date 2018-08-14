const faker = require('faker');

const fs = require('fs');

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

const generateMonth = () => {
  const month = randomNumber(1, 12);
  return month >= 10 ? month : `0${month}`;
};

const generateDay = () => {
  const day = randomNumber(1, 28);
  return day >= 10 ? day : `0${day}`;
};

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

const makeAppointments = () => {
  const appointments = [];
  for (let i = 1; i < randomNumber(0, 5); i += 1) {
    appointments.push({
      start_time: `${randomNumber(11, 21)}:00:00`,
      date_string: `2018-${generateMonth()}-${generateDay()} 00:00:00`,
      guest_count: randomNumber(1, 10),
      customer: {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        phone: randomPhoneNumber(),
        email: faker.internet.email(),
      },
    });
  }
  return appointments;
};

let documents = [];
const makeDocument = (business, id) => {
  const document = business;
  document.appointments = makeAppointments();
  documents.push(document);
  if (id % 1000000 === 0) {
    fs.writeFileSync(`json/mongo${id / 1000000}.json`, JSON.stringify(documents), (err) => {
      if (err) return console.log(err);
      return `created file ${id / 1000000}`;
    });
    documents = [];
  }
};

const makeUniqueBusinesses = (rounds) => {
  let id = 1;
  const makeNames = (counter, name = []) => {
    if (!counter) {
      makeDocument({
        id,
        name: name.join(' '),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        zip: faker.address.zipCode(),
        phone: randomPhoneNumber(),
        opens: `${randomNumber(7, 12)}:00:00`,
        closes: `${randomNumber(19, 24)}:00:00`,
        guest_max: randomNumber(3, 10),
      }, id);
      id += 1;
    } else {
      for (let i = 0; i < adj.length; i += 1) {
        const element = adj[i];
        makeNames(counter - 1, name.concat(element));
      }
    }
  };
  makeNames(rounds);
};

makeUniqueBusinesses(7);
