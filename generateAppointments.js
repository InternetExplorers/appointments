const fs = require('fs');

const randomNumber = (min = 0, max = 9) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateMonth = () => {
  const month = randomNumber(1, 12);
  return month >= 10 ? month : `0${month}`;
};

const generateDay = () => {
  const day = randomNumber(1, 28);
  return day >= 10 ? day : `0${day}`;
};

const makeAppointments = () => {
  let appointments = [];
  let id = 1;
  for (let i = 1; i <= 50000000; i += 1) {
    appointments.push([randomNumber(1, 10000000), randomNumber(1, 20000000), `${randomNumber(11, 21)}:00:00`, `2018-${generateMonth()}-${generateDay()} 00:00:00`, randomNumber(1, 10)]);
    if (i % 5000000 === 0) {
      fs.appendFileSync(`data/appointments/appointments${id}.csv`, appointments.join('\n'));
      appointments = [];
      id += 1;
    }
  }
};

makeAppointments();
