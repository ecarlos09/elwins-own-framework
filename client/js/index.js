//Setup event listeners here

  
// ********************************************
// SETUP
const btn = document.querySelector('button');
const form = document.querySelector('#new-limerick-form');

// Bind event listeners
btn.addEventListener('click', getMessage);
form.addEventListener('submit', submitCat);

// Fetch all limericks as soon as app is loaded
getAllLimericks();
// ********************************************