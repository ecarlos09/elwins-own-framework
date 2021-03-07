const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

app.listen(port, () => console.log('Visit http://localhost:${port} to see our content!'));