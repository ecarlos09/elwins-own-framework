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