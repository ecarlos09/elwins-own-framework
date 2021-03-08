const app = require('./app');
const port = 3000;

app.listen(port, () => {
    console.log(`Visit http://localhost:${port} to create your own personalised limerick!`);
});