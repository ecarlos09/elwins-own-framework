
const { it } = require('@jest/globals');
const request = require('supertest');
const app = require('../app');

describe('Testing the API server', () => {
    let api;

    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log('Test server is running on port 5000');
        });
    });

    afterAll((done) => {
        console.log('Gracefully exiting test server');
        api.close(done);
    });

    it('responds to get / with status 200', (done) => {
        request(api).get('/').expect(200,done);
    });

    it('responds to get /example with status 200', (done) => {
        request(api).get('/example').expect(200,done);
    });
});