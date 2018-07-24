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

// const deteleAppointment = (data, callback) => {
//   const queryString = '';
//   db.query(queryString, (err, success) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, success);
//     }
//   });
// };

// const updateAppointment = (data, callback) => {
//   const queryString = '';
//   db.query(queryString, (err, success) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, success);
//     }
//   });
// };

module.exports = {
  addUser,
  addAppointment,
  getAvailability,
  getUserAppointments,
  getBusinessInfo,
  // deteleAppointment,
  // updateAppointment,
};
