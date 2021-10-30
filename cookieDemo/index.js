const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser('secretcookies'));

app.get('/greet', (req, res) => {
    const { name = 'anon' } = req.cookies;
    res.send(`hey there ${name}`);
});

app.get('/setname', (req, res) => {
    res.cookie('name', 'stevie');
    res.send('okay, you got a cookie')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('mystical cookie');
})

app.get('/verifyfruit', (req, res) => {
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log('3000');
});