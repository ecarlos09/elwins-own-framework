const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to our site!  Use the options below to generate your own personalilsed limerick');
});

app.listen(port, () => console.log('Visit http://localhost:${port} to create your own personalised limerick!'));