const express = require('express');
const app = express();
const session = require('express-session');
const sessionOptions = { secret: 'shhh', resave: false, saveUninitialized: false };

app.use(session(sessionOptions));

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else req.session.count = 1;
    res.send(`You have viewed this page ${req.session.count} times.`);
})

app.get('/register', (req, res) => {
    const { username = 'Anon' } = req.query;
    req.session.username = username;
    res.redirect('/greet');
})

app.get('/greet', (req, res) => {
    const { username } = req.session;
    console.log(req.session);
    res.send(`Hello ${username}`);
})

app.listen(3000, () => {
    console.log('3000');
});