const limerickReqs = [
    {
        name: 'occupations',
        dataType: 'array',
        info: ['butcher', 'baker', 'candlestick maker' ]
    },
    {
        name: 'locations',
        dataType: 'array',
        info: ['Wales', 'Leeds', 'York']
    },
    {
        name: "walesCauses",
        dataType: "Object",
        info: {
            "reading": 'their scales', 
            "painting": 'their nails', 
            "drinking": 'some ale', 
            "sending": 'emails'
        }
    },
    {
        name: "leedsCauses",
        dataType: "Object",
        info: {
            "removing": 'some weeds',
            "researching": 'the Swedes',
            "naming": 'dog breeds', 
            "downing": 'mead',
        }
    },
    {
        name: "yorkCauses",
        dataType: "Object",
        info: {
            "bending": 'a fork', 
            "tenderizing": 'some pork', 
            "removing": 'a cork', 
            "delivering": 'a stalk'
        }
    },
    {
        name: "walesIncidents",
        dataType: "Object",
        info: {
            "annoy": 'Gareth Bale', 
            "ruin": 'jail', 
            "empower": 'all the snails', 
            "summon": 'the Holy Grail'
        }
    },
    {
        name: "leedsIncidents",
        dataType: "Object",
        info: {
            "fulfill": 'their every need', 
            "freeze": 'their noble steed', 
            "wash": 'their dirty knees', 
            "abolish": 'tuition fees'
        }
    },
    {
        name: "yorkIncidents",
        dataType: "Object",
        info: {
            "terrify": 'the singer Bjork', 
            "placate": 'Mickey Rourke', 
            "liquefy": 'a stork', 
            "banish": 'all the orcs'
        }
    },
]

module.exports = limerickReqs;