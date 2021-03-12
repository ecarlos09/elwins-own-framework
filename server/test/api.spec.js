
const { it } = require('@jest/globals');
const request = require('supertest');
const app = require('../app');
const LimerickGen = require('../models/limerick_gen');

describe('Testing the API server', () => {
    let api;
    let testLimerick = {
        id: 2,
        author: "newAuthor",
        limerick: LimerickGen.randomLimerick()
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

    it('retrieves a limerick by ID', (done) => {
        request(api)
            .get('/limericks/1')
            .expect(200)
            .expect({
                id: 1, 
                author: "Elwin",
                limerick: `Elwin was a coder from Blighty,<br>Who one day received a big frighty,<br>But little did he know<br>With persistence he'd grow<br>Just a little bit fonder of chai tea.`
            }, done);
    });

    it('responds to post /limericks with status 201', (done) => {
        request(api)
            .post('/limericks')
            .send(testLimerick)
            .expect(201)
            .expect(testLimerick, done);
    });
});