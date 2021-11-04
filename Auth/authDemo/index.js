const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/authDemo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('all good db'))
    .catch(e => console.log(e));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'secret' }));

app.get('/', (req, res) => {
    res.send('this is the home page, what is up my fellow kids?')
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        password: hash
    })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const comparePw = await bcrypt.compare(password, user.password);
    if (comparePw) {
        req.session.user_id = user._id;
        res.send('guess you are a god now')
    } else res.send('try again peasant')
})

app.get('/secret', (req, res) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    }
    res.send('you cannot see me unless you are logged in');
})

app.listen(3000, () => {
    console.log('ok');
})