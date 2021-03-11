const express = require('express');
const router = express.Router();

const Limerick = require('../models/limerick');

router.get('/', (req, res) => {
    const limericksData = Limerick.all;
    res.send(limericksData);
});

router.get('/:id', (req, res) => {
    try {
        const limerickId = parseInt(req.params.id);
        const selectedLimerick = Limerick.findById(limerickId);
        res.send(selectedLimerick);
    } catch (err) {
        console.log(err);
        const customErr = "I'm sorry, but it doesn't look like that limerick has been written yet.  Try a different number!"
        res.status(404).send(`${err} - ${customErr}`);
    }
});

router.post('/', (req, res) => {
    const data = req.body;
    const newLimerick = Limerick.create(data);
    res.status(201).send(newLimerick);
});

// router.delete('/:id', (req, res) => {
//     const catId = parseInt(req.params.id);
//     const catToDestroy = Cat.findById(catId);
//     catToDestroy.destroy();
//     res.status(204).send();
// });

module.exports = router;