//Client side functionality goes here


// ********************************************
// Limerick flow
// index
function getAllLimericks(){
    fetch('http://localhost:3000/limericks')
        .then(r => r.json())
        .then(appendLimericks)
        .catch(console.warn)
};

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

// helpers
function appendLimericks(limericks){
    limericks.forEach(appendLimerick);
};

function appendLimerick(limerickData){
    const newLimerick = document.createElement('li');
    newLi.textContent = `Name: ${limerickData.name} || Age: ${limerickData.age}`
    const limericksList = document.querySelector('ul');
    limericksList.append(newLi);
};

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