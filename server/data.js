











//Create function that generates a random array index
const randArrayIndex = (array) => {
    return Math.floor(Math.random()*(array.length));
};
//Create function that returns a random key from an object
const randObjectKey = (object) => {
    let objectKeys = Object.keys(object);
    let randomIndex = Math.floor(Math.random()*(objectKeys.length));
    return objectKeys[randomIndex];
};


let exampleLimerick = [
    {
        id: 1, 
        author: "Elwin",
        occupation: `${occupation}`, 
        location: `${location}`, 
        limerick: `${finalLimerick}`
    }
] 

module.exports = exampleLimerick;