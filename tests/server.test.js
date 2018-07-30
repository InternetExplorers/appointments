const request = require('request');
const moment = require('moment');
const superRequest = require('supertest');
const server = require('../server/server.js');

const randomEmail = (() => `test_random${Math.floor(Math.random() * 1000000)}@${Math.floor(Math.random() * 1000000)}`)();

const sampleUserData = {
  userDetails: {
    firstName: 'Jordan',
    lastName: 'Bice',
    phone: '000-000-0000',
    email: randomEmail,
  },
  appointmentDetails: {
    businessId: 1,
    customerId: null,
    time: '3:30 PM',
    date: 'July 27, 2018',
    count: '2',
  },
};

describe('Server test', () => {
  it('should get data from businessInfo', (done) => {
    superRequest(server).get('/business/1/appointments')
      .expect(200)
      .end(done);
  });
  it('should add appointment if user is new', (done) => {
    superRequest(server).post('/business/1/make_appointment')
      .send(sampleUserData)
      .expect(200)
      .end(done);
  });
  it('should add appointment if user is old', (done) => {
    superRequest(server).post('/business/1/make_appointment')
      .send(sampleUserData)
      .expect(200)
      .end(done);
  });
});



describe('Server integration test', () => {
  it('Should send GET request for business info and return with correct data types', () => {
    request('http://localhost:3003/business/50/appointments', (error, response, body) => {
      const data = JSON.parse(body);
      expect(data[0].id).toEqual(50);
      expect(typeof data[0].id).toEqual('number');
      expect(data[0].name.length).toBeGreaterThan(0);
      expect(typeof data[0].name).toEqual('string');
      expect(data[0].address.length).toBeGreaterThan(0);
      expect(typeof data[0].address).toEqual('string');
      expect(data[0].city.length).toBeGreaterThan(0);
      expect(typeof data[0].city).toEqual('string');
      expect(data[0].state.length).toBeGreaterThan(0);
      expect(typeof data[0].state).toEqual('string');
      expect(data[0].zip.length).toBeGreaterThan(0);
      expect(typeof data[0].zip).toEqual('string');
      expect(data[0].phone.length).toBeGreaterThan(0);
      expect(typeof data[0].phone).toEqual('string');
      expect(data[0].opens.length).toBeGreaterThan(0);
      expect(typeof data[0].opens).toEqual('string');
      expect(moment.isMoment(moment(data[0].opens, 'HH:mm:a'))).toEqual(true);
      expect(data[0].closes.length).toBeGreaterThan(0);
      expect(moment.isMoment(moment(data[0].closes, 'HH:mm:a'))).toEqual(true);
      expect(typeof data[0].closes).toEqual('string');
      expect(data[0].guest_max).toBeGreaterThan(0);
      expect(typeof data[0].guest_max).toEqual('number');
    });
  });
});
