const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('all shelters');
});

router.post('/', (req, res) => {
    res.send('create shelter');
});

router.get('/:id', (req, res) => {
    res.send('one shelter');
});

router.get('/:id/edit', (req, res) => {
    res.send('one shelter edit');
});

module.exports = router;