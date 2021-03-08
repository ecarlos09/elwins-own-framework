Hello!

Here, I will be attempting to create my own API framework from scratch using Express.js

As I complete this task, I will be updating the README to document all the steps I undertook in order to get it working.  Stay tuned and (hopefully) you'll see me progress!

### Study Notes
To help me with this task, I have used the following resources, along with my own notes that I handwrote during the lecture:
| [JavaScript API Frameworks](https://github.com/getfutureproof/fp_guides_wiki/wiki/JavaScript-API-Frameworks) | [Testing API Endpoints with Supertest](https://github.com/getfutureproof/fp_guides_wiki/wiki/API-Endpoint-Testing-with-Supertest) |

### Steps to create my API server
(N.B. If using a git flow, make sure you `cd` into main directory for your repo when pushing changes outside your server directory)
To create my API server, I did the following:
1. Initialize a new repository containing just a README file (this one!)
2. `cd` into the repo and create a new directory called "server" (this is where all my code and files related to just the server side will be stored)
3. Install express
    - `cd server` (this ensures express is installed inside the server folder)
    - `npm init` (under "main", type the name of the file you intend to create your server from e.g. app.js)
    - `npm install express --save` (this installs the express framework)
    - Remember to add node_modules to .gitignore
4. Create the file for your server
    - e.g. `touch app.js` or `touch server.js`
    - In your newly created file, require Express and save it to a variable e.g. `const express = require('express')`
    - Create a new instance of express and save it to a variable - this will be our server! e.g. `const app = express()`
    - Set up the root route (the 'homepage' for your server') `app.get('/', (req, res) => {res.send('Display message for homepage')})`
    - Choose a local port (typically 3000) and tell the server to start listening for requests: 
        - `const port = 3000`
        - `app.listen(port, () => console.log('Visit http://localhost:${port} to see our content!'))`
    - (Optional) Install nodemon so that the server auto-updates after changes are saved
        - Ensure you are still in your server folder
        - `npm install nodemon --save-dev`
        - In your package.json file, add a nodemon command to your script object e.g. `"start":"nodemon app.js"`
        - `npm run start` will now start your server and activate nodemon
    - Install CORS (cross-origin resource sharing)
        - Ensure you are still in your server folder
        - `npm install cors --save-dev`
        - In the app.js file (or equivalent), `const cors = require('cors');`
        - In the same file, after the server declaration, instruct it to use CORS: `app.use(cors());`
5. Introduce TDD:
    - Inside your server directory, `npm install jest supertest --save-dev` so that we can test our server requirements
    - Add the following scripts to your package.json file:
        - `"test": "jest --silent --watchAll"`
        - `"coverage": "jest --coverage --silent"`
    - Create a new directory e.g. "Test" (`mkdir test`),  and `cd` into it
    - Create a new test suite, e.g. `touch api.spec.js`
6. Create a separate server for your tests:
    - Rejigging your main server:
        - Inside the server folder, create a new js file e.g. `touch index.js`
        - Move `const port = ...` and `app.listen ...` from your app.js file to your index.js file
        - In app.js `module.exports = { app };`
        - In index.js `const app = require('./app');`
        - In the package.json file, change the dev script from `nodemon app.js` to `nodemon index.js`
    - Creating the test server:
        - In the api.spec.js file, add: `const request = require('supertest');`
        - Below that, import the server from app.js: `const app = require('../app')`
        - Create the test server:
            - `describe('Testing the API server', () => {});`
            - Inside the describe block, declare a variable for your api (`let api`) and add two functions (these will respectively start and exit your server):
                - `beforeAll (() => {api = app.listen(5000, () => {console.log('Test server is running on port 5000')})})`
                - `afterAll ((done) => {console.log('Gracefully exiting test server'); api.close(done)}))`
7. Add a test!
    - Create a new test block below your beforeAll and afterAll functions
        - e.g Test to see if the main directory responds with a 200 status:
        - `it('responds to get / with status 200', (done) => {request(api).get('/').expect(200,done)})`
        - Ensure you are in your server directory then `npm run test` in the terminal to run the tests
    - N.B. You can also create tests for extra filepaths and commands (which we will do below!)