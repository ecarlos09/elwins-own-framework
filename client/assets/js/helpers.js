// //Client side functionality goes here

//Import user inputs
const userInput = require('./userInput');

function showExample(e) {
   e.preventDefault();

   fetch('http://localhost:3000/limericks/1')
   .then(r => r.json())
   .then(appendLimerick)
   .catch(console.warn)
};

function showAll(e){
    e.preventDefault();

    fetch('http://localhost:3000/limericks/')
        .then(r => r.json())
        .then(appendAllLimericks)
        .catch(console.warn)
};

function createLimerick(e) {
    //create it here
    e.preventDefault();

    const body = document.body;
    const userInputLocation = document.getElementById('eg-here');
    const userData = `${(userInput.storeInputs())[0]}${(userInput.storeInputs())[1]}${(userInput.storeInputs())[2]}`;
    const displayuserInput = userInputLocation.innerHTML = `${userData}`;


}

function extractAllLimericks(limerickData){
    let limericks = limerickData.map(data => `${data.limerick}<br><br>`);
    return limericks;
}
function appendAllLimericks(limerickData) {
    const body = document.body;
    const limerickLocation = document.getElementById('display-all');
    const limericks = extractAllLimericks(limerickData);
    console.log(limericks);
    const displayLimericks = limerickLocation.innerHTML = `${limericks}`;
}

function appendLimerick(limerickData){
    const body = document.body;
    const limerickLocation = document.getElementById('eg-here');
    const limerick = limerickData.limerick;
    const displayLimerick = limerickLocation.innerHTML = `${limerick}`;
};

module.exports = { showExample, showAll, createLimerick }