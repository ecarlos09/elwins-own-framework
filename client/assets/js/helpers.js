//Client side functionality goes here

function showExample(){
    fetch('http://localhost:3000/limericks/1')
        .then(r => r.json())
        .then(appendLimerick)
        .catch(console.warn)
};

function showAll(){
    fetch('http://localhost:3000/limericks/')
        .then(r => r.json())
        .then(appendAllLimericks)
        .catch(console.warn)
};

function createLimerick() {
    //create it here
}

function appendAllLimericks() {
    const body = document.body;
    const limerickLocation = document.getElementById('show-all');
    const limericks = limerickData;
    const displayLimericks = limerickLocation.innerHTML = `${limericks}`;
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