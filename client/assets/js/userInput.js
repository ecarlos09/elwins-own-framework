//Declare function that receives and stores user inputs as an array

const storeInputs = () => {
    let name = document.getElementById('name').value;
    let occupation = document.getElementById('occupation').value;
    let location = document.getElementById('location').value;
    return [name, occupation, location];
}

module.exports = { storeInputs }