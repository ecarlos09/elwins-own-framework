console.log('Hello, you found my JavaScript!')

//Import helpers
const helpers = require('./helpers');

//Setup event listeners here

// ********************************************
// SETUP
function initBindings() {
    const egBtn = document.getElementById('example');
    const createBtn = document.getElementById('create');
    egBtn.addEventListener('click', helpers.showExample);
    createBtn.addEventListener('click', helpers.createLimerick);
}

initBindings();