const { application } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('all doggos');
});

router.get('/:id', (req, res) => {
    res.send('one doggo');
});

router.get('/:id/edit', (req, res) => {
    res.send('edit doggo');
});

module.exports = router;