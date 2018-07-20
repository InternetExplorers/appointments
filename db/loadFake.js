const faker = require('faker');
const db = require('./index');

const openingHours = ['06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '18'];
const closingHours = ['12', '13', '14', '15', '16', '18', '19', '20', '21', '22', '23', '24', '01', '02'];
const minutes = ['00', '30'];


const generateFakeBusinessData = () => {
  for (let j = 0; j < 100; j += 1) {
    const name = faker.company.companyName();
    const address = faker.address.streetAddress();
    const city = faker.address.city();
    const state = faker.address.stateAbbr();
    const zip = faker.address.zipCode();
    const openTimes = `${openingHours[Math.floor(Math.random() * Math.floor(openingHours.length - 1))]}:${minutes[Math.floor(Math.random() * Math.floor(2))]}:00`;
    const closeTimes = `${closingHours[Math.floor(Math.random() * Math.floor(openingHours.length - 1))]}:${minutes[Math.floor(Math.random() * Math.floor(2))]}:00`;
    const guestMax = Math.floor(Math.random() * Math.floor(50));
    const sqlString = 'INSERT INTO businesses (name, address, city, state, zip, opens, closes, guest_max) VALUES(?, ?, ?, ?, ?, ?, ?, ?)';
    const data = [name, address, city, state, zip, openTimes, closeTimes, guestMax];

    db.query(sqlString, data, (err) => {
      if (err) {
        console.log('Jordan, error loading data into DB!');
        throw err;
      } else {
        console.log(`Business ${name} created. ${j + 1} out of 100`);
      }
    });
  }
};

generateFakeBusinessData();
