(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//Client side functionality goes here

function showExample(){
    fetch('http://localhost:3000/limericks/1')
        .then(r => r.json())
        .then(appendLimerick)
        .catch(console.warn)
};

function createLimerick() {
    //create it here
}

function appendLimerick(limerickData){
    const body = document.body;
    const limerickLocation = document.getElementById('eg-here');
    const limerick = limerickData.limerick;
    const displayLimerick = limerickLocation.innerHTML = `${limerick}`;

    // const limerick = document.createElement('li');
    // newLi.textContent = `Name: ${limerickData.name} || Age: ${limerickData.age}`
    // const limericksList = document.querySelector('ul');
    // limericksList.append(newLi);
};

module.exports = { showExample }

// // create
// function submitCat(e){
//     e.preventDefault();

//     const catData = {
//         name: e.target.name.value,
//         age: e.target.age.value
//     };

//     const options = { 
//         method: 'POST',
//         body: JSON.stringify(catData),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     };

//     fetch('http://localhost:3000/cats', options)
//         .then(r => r.json())
//         .then(appendCat)
//         .catch(console.warn)
// };

// // helpers
// function appendLimericks(limericks){
//     limericks.forEach(appendLimerick);
// };

// // ********************************************

// // MESSAGE FLOW
// function getMessage(){
//     fetch('http://localhost:3000')
//         .then(r => r.text())
//         .then(renderMessage)
//         .catch(console.warn)
// };

// function renderMessage(msgText){
//     const msg = document.createElement('p');
//     msg.textContent = msgText;
//     msg.style.color = 'red';
//     document.body.append(msg);
// };

// // ********************************************

// module.exports = {
//     getAllCats,
//     submitCat,
//     appendCats,
//     appendCat,
//     getMessage,
//     renderMessage
// }
},{}],2:[function(require,module,exports){
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
},{"./helpers":1}]},{},[2]);
