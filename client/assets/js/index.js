console.log('Hello, you found my JavaScript!')

//Import helpers
const helpers = require('./helpers');

//Setup event listeners here

// ********************************************
// SETUP
function initBindings() {
    let createBtn = document.getElementById('create');
    createBtn.addEventListener('click', helpers.createLimerick);
}
const btn = document.querySelector('button');
const form = document.querySelector('#new-limerick-form');

initBindings();