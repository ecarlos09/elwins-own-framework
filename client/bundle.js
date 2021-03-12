(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./userInput":3}],2:[function(require,module,exports){
console.log('Hello, you found my JavaScript!')

//Import helpers
const helpers = require('./helpers');

//Setup event listeners here

// ********************************************
// SETUP
function initBindings() {
    const egBtn = document.getElementById('example');
    const createBtn = document.getElementById('create');
    const showAllBtn = document.getElementById('show-all');
    egBtn.addEventListener('click', helpers.showExample);
    createBtn.addEventListener('click', helpers.createLimerick);
    showAllBtn.addEventListener('click', helpers.showAll);
}

initBindings();
},{"./helpers":1}],3:[function(require,module,exports){
//Declare function that receives and stores user inputs as an array

const storeInputs = () => {
    let name = document.getElementById('name').value;
    let occupation = document.getElementById('occupation').value;
    let location = document.getElementById('location').value;
    return [name, occupation, location];
}

module.exports = { storeInputs }
},{}]},{},[2]);
