
const { it } = require('@jest/globals');
const request = require('supertest');
const app = require('../app');

describe('Testing the API server', () => {
    let api;
    let testLimerick = {
        id: 2,
        author: "newAuthor",
        limerick: 'here is a new limerick that is not actually a limerick!'
    };

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

    it('responds to get /limericks with status 200', (done) => {
        request(api).get('/limericks').expect(200,done);
    });

    it('responds to post /limericks with status 201', (done) => {
        request(api)
        .post('/limericks')
        .send(testLimerick)
        .expect(201)
        .expect({id: 2, ...testLimerick}, done);
    });
});