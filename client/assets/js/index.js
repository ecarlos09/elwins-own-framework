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