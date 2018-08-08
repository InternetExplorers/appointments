const db = require('./index');

const checkUser = (data, callback) => {
  const queryString = 'SELECT * FROM users WHERE email = ?';
  db.query(queryString, [data], (err, success) => {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
};

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

const getAppointment = (data, callback) => {
  const queryString = `SELECT * FROM appointments_log WHERE id=${data.appointment_id} AND business_id=${data.business_id}`;
  db.query(queryString, (err, results) => {
    if (err) callback(err);
    else callback(null, results);
  });
};

const updateAppointment = (data, callback) => {
  const queryString = `UPDATE appointments_log SET start_time=${data.body.time}, date_string=${data.body.date}, guest_count=${data.body.count} WHERE appointments_log.id=${data.params.appointment_id}`;
  db.query(queryString, (err, results) => {
    if (err) callback(err);
    else callback(null, results);
  });
};

const addAppointment = (data, callback) => {
  const queryString = 'INSERT INTO appointments_log (business_id, customer_id, start_time, date_string, guest_count) VALUES(?, ?, ?, ?, ?)';
  db.query(queryString, [data.businessId, data.customerId, data.time, data.date, data.count], (err, success) => {
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

const userCount = (callback) => {
  const queryString = 'SELECT * FROM users';
  db.query(queryString, (err, success) => {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
};

const appointmentCount = (callback) => {
  const queryString = 'SELECT * FROM appointments_log';
  db.query(queryString, (err, success) => {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
};

module.exports = {
  checkUser,
  addUser,
  getAppointment,
  addAppointment,
  updateAppointment,
  getBusinessInfo,
  userCount,
  appointmentCount,
};
