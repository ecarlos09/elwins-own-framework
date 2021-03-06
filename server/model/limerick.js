const limericksData = require('../data');

class Limerick {
    constructor(data) {
        this.id = data.id;
        this.author = data.author;
        this.occupation = data.occupation;
        this.location = data.location;
        this.limerick = data.limerick;        
    }

    static get all() {
        const limericks = limericksData.map((limerick) => new Limerick(limerick));
        return limericks;
    }

    // static findById(id) {
    //     try {
    //         const catData = catsData.filter((cat) => cat.id === id)[0];
    //         const cat = new Cat(catData);
    //         return cat;
    //     } catch (err) {
    //         throw new Error('That cat does not exist!');
    //     }
    // }

    // static create(cat) {
    //     const newCatId = catsData.length + 1;
    //     const newCat = new Cat({ id: newCatId, ...cat });
    //     catsData.push(newCat);
    //     return newCat;
    // }

    // destroy() {
    //     const cat = catsData.filter((cat) => cat.id === this.id)[0];
    //     catsData.splice(catsData.indexOf(cat), 1);
    // }
}

module.exports = Limerick;