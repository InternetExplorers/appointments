require('newrelic');
const redis = require('redis');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helper = require('../db/dbHelpers.js');

const PORT = 3003;
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/:businessId/', express.static(path.join(__dirname, '../public')));

// const client = redis.createClient();

app.get('/business/:id/appointments', (req, res) => {
  helper.getBusinessInfo({ id: req.params.id }, (err, success) => {
    if (err) {
      res.status(404).send();
    } else {
      res.status(200).send(success);
    }
  });
});

// CREATE
app.post('/business/:id/make_appointment', (req, res) => {
  helper.checkUser(req.body, (err, succ) => {
    if (err) {
      res.status(500).send();
    } else if (succ[0]) {
      req.body.appointmentDetails.customerId = `${succ[0].id}`;
      helper.addAppointment(req.body.appointmentDetails, (error, success) => {
        if (error) {
          res.status(400).send();
        } else {
          res.status(201).send(success);
        }
      });
    } else {
      helper.addUser(req.body.userDetails, (failed, succeeded) => {
        if (failed) {
          res.status(400).send();
        } else {
          req.body.appointmentDetails.customerId = succeeded.insertId;
          helper.addAppointment(
            req.body.appointmentDetails,
            (error, success) => {
              if (error) {
                res.status(400).send();
              } else {
                res.status(201).send(success);
              }
            },
          );
        }
      });
    }
  });
});

// READ
app.get(
  '/business/:business_id/get_appointment/:appointment_id',
  (req, res) => {
    // client.mget([req.params.business_id, req.params.appointment_id],
    //   (result) => {
    //     if (result) {
    //       console.log(result);
    //       res.status(200).json(result);
    //     } else {
    helper.getAppointment(req.params, (err, data) => {
      if (err) res.status(400).send();
      else {
        // client.mset(
        //   [req.params.business_id, req.params.appointment_id],
        //   4000,
        //   JSON.stringify(data),
        // );
        res.status(200).json(data);
      }
    });
    // }
    // });
  },
);

// UPDATE
app.put(
  '/business/:business_id/update_appointment/:appointment_id',
  (req, res) => {
    helper.updateAppointment(req.params, (err) => {
      if (err) res.status(400).send();
      else res.status(204).send();
    });
  },
);

// DELETE
app.delete(
  '/business/:business_id/remove_appointment/:appointment_id',
  (req, res) => {
    helper.removeAppointment(req.params, (err) => {
      if (err) res.status(400).send();
      else res.status(204).send();
    });
  },
);

app.listen(PORT, () => console.log(`Nice Jordan, app listening on port ${PORT}!`));

module.exports = app;
