const db = require('./index');

const addUser = (data, callback) => {
  const queryString = 'INSERT INTO users (first_name, last_name, phone, email ) VALUES(?, ?, ? , ?)';
  db.query(queryString, [data.firstName, data.lastName, data.phone, data.email], (err, success) => {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
};

// addUser({ firstName: 'Jordan', lastName: 'Bice', phone: '510-100-0000', email: 'jordanbice@blackrockgroup.com' }, (err, success) => {
//   if (err) {
//     console.log('Did not go down smooth', err);
//   } else if (success) {
//     console.log('Data loaded onto DB@');
//   }
// });

const addAppointment = (data, callback) => {
  const dateString = new Intl.DateTimeFormat('en-US').format(data.dateTime);
  const queryString = 'INSERT INTO appointments_log (customer_id, business_id, start_time, date_string, guest_count) VALUES(?, ?, ?, ?, ?)';
  db.query(queryString, [data.customerId, data.businessId, data.dateTime, dateString, data.guestCount], (err, success) => {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
};
//
// const newDate = new Date(2018, 11, 24, 10, 33, 30, 0);
//
//
// addAppointment ({ customerId: 1, businessId: 1, dateTime: newDate, guestCount: 2 }, (err, success) => {
//   if (err) {
//     console.log('Did not go down smooth', err);
//   } else if (success) {
//     console.log('Data loaded onto DB@');
//   }
// });


const getAvailability = (data, callback) => {
  const dateString = new Intl.DateTimeFormat('en-US').format(data.dateTime);
  const queryString = 'SELECT appointments_log.*, businesses.name FROM appointments_log INNER JOIN businesses ON appointments_log.business_id = businesses.id WHERE business_id = ? AND date_string = ?';
  db.query(queryString, [data.businessId, dateString], (err, success) => {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
};

// const newDate = new Date(2018, 11, 24, 10, 33, 30, 0);
//
// getAvailability({ businessId: 1, dateTime: newDate }, (err, success) => {
//   if (err) {
//     console.log('Did not go down smooth', err);
//   } else {
//     console.log('Data loaded from DB', success);
//   }
// });

const getUserAppointments = (data, callback) => {
  const queryString = 'SELECT appointments_log.start_time, appointments_log.guest_count, businesses.name, businesses.address, businesses.city, businesses.phone FROM appointments_log INNER JOIN businesses ON appointments_log.business_id = businesses.id WHERE customer_id = ?';
  db.query(queryString, [data.userId], (err, success) => {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
};

// getUserAppointments({ userId: 1 }, (err, success) => {
//   if (err) {
//     console.log('Did not go down smooth', err);
//   } else {
//     console.log('Data loaded from DB', success);
//   }
// });

const getBusinessInfo = (data, callback) => {
  const queryString = 'SELECT * FROM businesses WHERE id = ?';
  db.query(queryString, [data.id], (err, success) => {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
};

const deteleAppointment = (data, callback) => {
  const queryString = '';
  db.query(queryString, (err, success) => {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
};

const updateAppointment = (data, callback) => {
  const queryString = '';
  db.query(queryString, (err, success) => {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
};

module.exports = {
  addUser,
  addAppointment,
  getAvailability,
  getUserAppointments,
  deteleAppointment,
  updateAppointment,
  getBusinessInfo,
};
