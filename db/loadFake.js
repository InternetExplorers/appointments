const faker = require('faker');
const db = require('./index');

const generateFakeBusinessData = () => {
  const openingTimes = ['06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
  const hoursOpen = [6, 7, 8, 9, 10, 11, 12];
  const closingHours = ['01', '02'];
  const minutes = ['00', '30'];
  const getRandom = max => Math.floor(Math.random() * max);

  const getClosingHours = (string) => {
    const open = Number(string.slice(0, 2));
    const hours = hoursOpen[getRandom(hoursOpen.length - 1)];
    if (hours + open > 24) {
      return closingHours[getRandom(2)];
    }
    return JSON.stringify(hours + open);
  };

  const getClosingMinutes = (hour) => {
    if (hour === '24') {
      return '00';
    }
    return minutes[getRandom(2)];
  };

  for (let j = 0; j < 100; j += 1) {
    const name = faker.company.companyName();
    const address = faker.address.streetAddress();
    const city = faker.address.city();
    const state = faker.address.stateAbbr();
    const zip = faker.address.zipCode();
    const phone = faker.phone.phoneNumber();
    const openTimes = `${openingTimes[getRandom(openingTimes.length - 1)]}:${minutes[getRandom(2)]}:00`;
    const closingHour = getClosingHours(openTimes);
    const closingMinutes = getClosingMinutes(closingHour);
    const closeTimes = `${closingHour}:${closingMinutes}:00`;
    const guestMax = 5 + getRandom(45);
    const sqlString = 'INSERT INTO businesses (name, address, city, state, zip, phone, opens, closes, guest_max) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const data = [name, address, city, state, zip, phone, openTimes, closeTimes, guestMax];

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

module.exports = generateFakeBusinessData;
