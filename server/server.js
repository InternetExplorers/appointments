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

app.get('/:id', (req, res) => {
  helper.getBusinessInfo({ id: req.params.id }, (err, success) => {
    if (err) {
      res.status(404).send();
    } else {
      res.status(200).send(success);
    }
  });
});

app.listen(PORT, () => console.log(`Nice Jordan, app listening on port ${PORT}!`));
