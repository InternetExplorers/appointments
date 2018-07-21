const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 3003;
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Nice Jordan, app listening on port ${PORT}!`));
