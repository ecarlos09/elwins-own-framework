const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


app.get('/', (req, res) => {
    res.send('Welcome to our site!  Use the options below to generate your own personalilsed limerick');
});

module.exports = { app };