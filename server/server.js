const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helper = require('../db/dbHelpers.js');

const PORT = 3003;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res, next) => {
  console.log(req.body, req.path);
  next();
});

app.get('business/:id/', (req, res) => {
  helper.getBusinessInfo({ id: req.params.id }, (err, success) => {
    if (err) {
      res.status(404).send();
    } else {
      res.status(200).send(success);
    }
  });
});

app.post('business/:id/appointments', (req, res) => {
  helper.checkUser(req.body.userDetails.email, (err, succ) => {
    if (err) {
      res.status(500).send();
    } else if (succ[0]) {
      req.body.appointmentDetails.customerId = `${succ[0].id}`;
      helper.addAppointment(req.body.appointmentDetails, (error, success) => {
        if (error) {
          res.status(400).send();
        } else {
          res.status(200).send(success);
        }
      });
    } else {
      helper.addUser(req.body.userDetails, (failed, succeeded) => {
        if (failed) {
          res.status(400).send();
        } else {
          req.body.appointmentDetails.customerId = `${succeeded.insertId}`;
          helper.addAppointment(req.body.appointmentDetails, (error, success) => {
            if (error) {
              res.status(400).send();
            } else {
              res.status(200).send(success);
            }
          });
        }
      });
    }
  });
});

app.listen(PORT, () => console.log(`Nice Jordan, app listening on port ${PORT}!`));
