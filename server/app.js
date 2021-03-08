const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Welcome to our site!  Use the options below to generate your own personalilsed limerick.');
});

app.get('/example', (req, res) => {
    res.send('Check out our example limerick!');
});

module.exports = app;