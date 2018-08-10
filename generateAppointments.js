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

const append = (appointments) => {
  const appointmentGroups = [];
  let prevIdx = 0;
  for (let j = 0; j <= appointments.length; j += 2000000) {
    appointmentGroups.push(appointments.slice(prevIdx, j).join('\n'));
    prevIdx = j;
  }
  for (let i = 1; i <= 10; i += 1) {
    const headers = 'id,business_id,customer_id,start_time,date_string,guest_count\n';
    fs.appendFileSync(`data/appointments/appointments${i}.csv`, headers + appointmentGroups[i]);
  }
};

const makeAppointments = () => {
  const appointments = [];
  for (let i = 1; i <= 20000000; i += 1) {
    appointments.push([i, randomNumber(1, 10000000), randomNumber(1, 20000000), `${randomNumber(11, 21)}:00:00`, `2018-${generateMonth()}-${generateDay()} 00:00:00`, randomNumber(1, 10)]);
  }
  append(appointments);
};

makeAppointments();
