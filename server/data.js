//Define an list of default locations and occupations
const locations = ['Wales', 'Leeds', 'York'];
const occupations = ['butcher', 'baker', 'candlestick maker' ];

//Define several objects containing potential limerick entries linked to chosen location
const walesCauses = {
    "reading": 'their scales', 
    "painting": 'their nails', 
    "drinking": 'some ale', 
    "sending": 'emails'
};

const leedsCauses = {
    "pulling out": 'some weeds',
    "researching": 'the Swedes',
    "naming": 'dog breeds', 
    "downing": ' mead',
};

const yorkCauses = {
    "bending": 'a fork', 
    "tenderizing": 'some pork', 
    "pulling out": 'a cork', 
    "delivering": 'a stalk'
}; 

const walesIncidents = {
    "annoy": 'Gareth Bale', 
    "bring them to": 'jail', 
    "empower": 'all the snails', 
    "summon": 'the Holy Grail'
};

const leedsIncidents = {
    "fulfill": 'their every need', 
    "freeze": 'their noble steed', 
    "wash": 'their dirty knees', 
    "abolish": 'tuition fees'
};

const yorkIncidents = {
    "terrify": 'the singer Bjork', 
    "placate": 'Mickey Rourke', 
    "pluck the hairs from": 'a stork', 
    "banish": 'all the orcs'
};

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
//Create function that returns a random value from an object
const randObjectValue = (object) => {
  let objectValues = Object.values(object);
  let randomIndex = Math.floor(Math.random()*(objectValues.length));
  return objectValues[randomIndex];
}

//Declare variables that will store the randomised words in the limerick
let userName = 'John Smith';
let occupation = occupations[randArrayIndex(occupations)];
let location = locations[randArrayIndex(locations)];
let cause;
let object1;
let incident;
let object2;

//Create function that generates limerick entries based on the location chosen
let randomCombination = (location) => {
    switch (location) {
        case 'Wales':
          cause = randObjectKey(walesCauses);
          object1 = randObjectValue(walesCauses);
          incident = randObjectKey(walesIncidents);
          object2 = randObjectValue(walesIncidents);
          return 'Random limerick generated!';
          break;
        case 'Leeds':
          cause = randObjectKey(leedsCauses);
          object1 = randObjectValue(leedsCauses);
          incident = randObjectKey(leedsIncidents);
          object2 = randObjectValue(leedsIncidents);
          return 'Random limerick generated!';
          break;
        case 'York':
          cause = randObjectKey(yorkCauses);
          object1 = randObjectValue(yorkCauses);
          incident = randObjectKey(yorkIncidents);
          object2 = randObjectValue(yorkIncidents);
          return 'Random limerick generated!';
          break;
        default:
          return 'Error!';
          break;
    };
};

//Invoke the randomCombination function to randomly asign limerick entries
randomCombination(location);

let line1 = `${userName} was a ${occupation} from ${location},`
let line2 = `\nWho one day was ${cause} ${object1},`
let line3 = `\nBut little did they know`
let line4 = `\nSome due diligence would show`
let line5 = `\nThat by doing so would ${incident} ${object2}.`

let finalLimerick = `${line1}${line2}${line3}${line4}${line5}`;

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