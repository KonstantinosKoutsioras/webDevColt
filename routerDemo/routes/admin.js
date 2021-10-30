const { application } = require('express');
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    };
    res.send('not an admin')
})

router.get('/topsecret', (req, res) => {
    res.send('si senor');
});

router.get('/redbutton', (req, res) => {
    res.send('no senor');
});

module.exports = router;