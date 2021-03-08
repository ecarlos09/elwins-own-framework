const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Welcome to our site!  Use the options to generate your own personalised limerick.  \nWhen you are finished, click "Create your limerick!');
});

app.get('/limericks', (req, res) => {
    res.send('Check out our example limerick!');
});

module.exports = app;