
const request = require('supertest');
const app = require('../app');

describe('Testing the API server', () => {
    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log('Test server is running on port 5000');
        });
    });

    afterAll((done) => {
        console.log('Gracefully exiting test server');
        api.close(done);
    });
});