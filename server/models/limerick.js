const limericksData = require('../data');
const limerickGen = require('./limerick_gen');

class Limerick {
    constructor(data) {
        this.id = data.id;
        this.author = data.author;
        this.limerick = data.limerick;        
    }

    static get all() {
        const limericks = limericksData.map((limerick) => new Limerick(limerick));
        return limericks;
    }

    static findById(id) {
        try {
            const limerickData = limericksData.filter((limerick) => limerick.id === id)[0];
            const limerick = new Limerick(limerickData);
            return limerick;
        } catch (err) {
            throw new Error('ID error');
        }
    }

    static create(limerick) {
        const newLimerickId = allLimericks.length + 1;
        const newLimerickAuthor = "newAuthor";
        const newEntry = LimerickGen();
        const newLimerick = new Limerick(
            {
                id: newLimerickId,
                author: newLimerickAuthor,
                limerick: newEntry
            }
        );
        limericksData.push(newLimerick);
        return newLimerick;
    }

    // destroy() {
    //     const cat = catsData.filter((cat) => cat.id === this.id)[0];
    //     catsData.splice(catsData.indexOf(cat), 1);
    // }
}

module.exports = Limerick;