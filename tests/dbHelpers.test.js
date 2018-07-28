const helper = require ('../db/dbHelpers.js');
const moment = require('moment');
const db = require('../db/index');
const fakeIt = require('../db/loadFake.js');

describe('Testing the data that loads fake data', () => {
  it('Load Fake should increase the business DB 100 entries', (done) => {
    db.query('SELECT * FROM businesses', (fail, success) => {
      expect(success.length%100).toEqual(1);
      let didFail = false;
      success.forEach((aBusiness) => {
        if (
          aBusiness.id < 0 ||
          typeof aBusiness.id !== 'number' ||
          typeof aBusiness.name !== 'string' ||
          typeof aBusiness.address !== 'string' ||
          typeof aBusiness.city !== 'string' ||
          typeof aBusiness.state !== 'string' ||
          typeof aBusiness.phone !== 'string' ||
          typeof aBusiness.opens !== 'string' ||
          moment.isMoment(moment(aBusiness.opens, 'HH:mm:a')) !== true ||
          typeof aBusiness.closes !== 'string' ||
          moment.isMoment(moment(aBusiness.closes, 'HH:mm:a')) !== true ||
          typeof aBusiness.guest_max !== 'number'
        ) {
          didFail = true;
        }
      });
      expect(didFail).toBe(false);
      done();
    });
  });
});

const userSample = {
  firstName: 'Jordan',
  lastName: 'Bice',
  phone: '000-000-0000',
  email: '@',
};

const appointmentSample = {
  businessId: 1,
  customerId: 1,
  time: '3:30 PM',
  date: 'July 27, 2018',
  count: '2',
};

describe('DB helper functions', () => {
  it('should have a function called addUser', () => {
    const type = typeof helper.addUser;
    expect(type).toEqual('function');
  });

  it('should increase the DB of Users by one when addUser is called', (done) => {
    let initialCount;
    let finalCount;
    const randomEmailGenerator = () => `test_random${Math.floor(Math.random() * Math.floor(1000000))}@${Math.floor(Math.random() * Math.floor(1000000))}`;

    const afterUserCountCB = (error, success) => {
      finalCount = success.length;
      expect(finalCount - 1).toEqual(initialCount);
      done();
    };

    const adduserCB = () => {
      helper.userCount(afterUserCountCB);
    };

    const beforeUserCountCB = (err, succ) => {
      initialCount = succ.length;
      const uniqueSample = userSample;
      uniqueSample.email = randomEmailGenerator();
      helper.addUser(uniqueSample, adduserCB);
    };

    helper.userCount(beforeUserCountCB);
  });


  it('should have a function called checkUser', () => {
    const type = typeof helper.checkUser;
    expect(type).toEqual('function');
  });

  it('it should check existing user data from DB', (done) => {
    const checkUserCB = (err, data) => {
      expect(data[0].first_name).toBe(userSample.firstName);
      expect(data[0].last_name).toBe(userSample.lastName);
      expect(data[0].phone).toBe(userSample.phone);
      expect(data[0].email).toBe(userSample.email);
      done();
    };

    const addUserCB = () => {
      helper.checkUser(userSample.email, checkUserCB);
    };

    helper.addUser(userSample.email, addUserCB);
  });

  it('should have a function called addAppointment', () => {
    const type = typeof helper.addAppointment;
    expect(type).toEqual('function');
  });

  it('add appointment should increment the appointment_log database by one', (done) => {
    let startCount;
    let endCount;
    const finalCountCB = (error, success) => {
      endCount = success.length;
      expect(endCount - 1).toEqual(startCount);
      done();
    };

    const addAppointmentCB = (fail, pass) => {
      if (pass) {
        helper.appointmentCount(finalCountCB);
      }
    };

    const initialCountCB = (err, succ) => {
      startCount = succ.length;
      helper.addAppointment(appointmentSample, addAppointmentCB);
    };
    // helper.addAppointment(appointmentSample);

    helper.appointmentCount(initialCountCB);
  });

  it('should have a function called getBusinessInfo', () => {
    const type = typeof helper.getBusinessInfo;
    expect(type).toEqual('function');
  });

  it('should yield a businesses information', (done) => {
    const cb = (err, success) => {
      const returnObject = success[0];
      expect(returnObject.id).toBeGreaterThan(0);
      expect(returnObject.name.length).toBeGreaterThan(0);
      expect(typeof returnObject.name).toEqual('string');
      expect(returnObject.address.length).toBeGreaterThan(0);
      expect(typeof returnObject.address).toEqual('string');
      expect(returnObject.city.length).toBeGreaterThan(0);
      expect(typeof returnObject.city).toEqual('string');
      expect(returnObject.state.length).toBeGreaterThan(0);
      expect(typeof returnObject.state).toEqual('string');
      expect(returnObject.zip.length).toBeGreaterThan(0);
      expect(typeof returnObject.zip).toEqual('string');
      expect(returnObject.phone.length).toBeGreaterThan(0);
      expect(typeof returnObject.phone).toEqual('string');
      expect(returnObject.opens.length).toBeGreaterThan(0);
      expect(typeof returnObject.opens).toEqual('string');
      expect(moment.isMoment(moment(returnObject.opens, 'HH:mm:a'))).toEqual(true);
      expect(returnObject.closes.length).toBeGreaterThan(0);
      expect(typeof returnObject.closes).toEqual('string');
      expect(moment.isMoment(moment(returnObject.closes, 'HH:mm:a'))).toEqual(true);
      expect(returnObject.guest_max).toBeGreaterThan(0);
      done();
    };
    helper.getBusinessInfo({ id: 1 }, cb);
  });
});
