const locations = ['Wales', 'Leeds', 'York'];
const occupations = ['Butcher', 'Baker', 'Candlestick maker' ];

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
    "delivering": 'a talk'
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

const randArrayIndex = (array) => {
    return Math.floor(Math.random()*(array.length)) - 1;
};

const randObjectIndex = (object) => {
    return object;
};

let userName = 'John Smith';
let occupation = occupations[randArrayIndex(occupations)];
let location = locations[randArrayIndex(locations)];

let cause = (location) => {
    switch (location) {
        case 'Wales':
            break;
        case 'Leeds':
            break;
        case 'York':
            break;
        default:
            return 'Error!';
            break;
    };
};

let line1 = `${userName} was a ${occupation} from ${location}},`;
let line2 = `Who one day was action object,`;
let line3 = `But little did they know`;
let line4 = `Some due diligence would show`;
let line5 = `That by doing so would action incident!`;

module.exports = [locations, walesCauses, leedsCauses, yorkCauses, walesIncidents, leedsIncidents, yorkIncidents];