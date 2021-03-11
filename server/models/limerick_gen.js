const limerickReqs = require('../limerick_reqs');

//Create function that generates a random array index
const randArrayIndex = (array) => {
    return Math.floor(Math.random()*(array.length));
};
//Create function that returns a random key from an object
const randObjectKey = (object) => {
    let objectKeys = Object.keys(object);
    let randomIndex = randArrayIndex(objecKeys);
    return objectKeys[randomIndex];
};

//Create function that returns a random value from an object
const randObjectValue = (object) => {
    let objectValues = Object.values(object);
    let randomIndex = randArrayIndex(objectValues);
    return objectValues[randomIndex];
}
  
//Declare variables that will store the available user choices
let userName = 'John Smith';
let occupations = limerickReqs[0].info;
let occupation = occupations[randArrayIndex(occupations)];
let locations = limerickReqs[1].info;
let location = locations[randArrayIndex(locations)];

//Import all causes and incidents from limerickReqs
let walesCauses = limerickReqs[2].info;
let leedsCauses = limerickReqs[3].info;
let yorkCauses = limerickReqs[4].info;
let walesIncidents = limerickReqs[5].info;
let leedsIncidents = limerickReqs[6].info;
let yorkIncidents = limerickReqs[7].info;

//Declare dependent variables
let cause;
let object1;
let incident;
let object2;
  
//Create function that generates limerick entries based on the location chosen
const randomLimerick = (location) => {
    switch (location) {
        case 'Wales':
          cause = randObjectKey(walesCauses);
          object1 = randObjectValue(walesCauses);
          incident = randObjectKey(walesIncidents);
          object2 = randObjectValue(walesIncidents);
          break;
        case 'Leeds':
          cause = randObjectKey(leedsCauses);
          object1 = randObjectValue(leedsCauses);
          incident = randObjectKey(leedsIncidents);
          object2 = randObjectValue(leedsIncidents);
          break;
        case 'York':
          cause = randObjectKey(yorkCauses);
          object1 = randObjectValue(yorkCauses);
          incident = randObjectKey(yorkIncidents);
          object2 = randObjectValue(yorkIncidents);
          break;
        default:
          return 'Error!';
          break;
    };

    let line1 = `${userName} was a ${occupation} from ${location},`;
    let line2 = `\nWho one day was ${cause} ${object1},`;
    let line3 = `\nBut little did they know`;
    let line4 = `\nSome due diligence would show`;
    let line5 = `\nThat by doing so would ${incident} ${object2}.`;

    let finalLimerick = `${line1}${line2}${line3}${line4}${line5}`;

    return finalLimerick;
};

module.exports = { randomLimerick };