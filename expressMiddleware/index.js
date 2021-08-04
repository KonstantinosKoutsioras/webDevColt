const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log("I love dogs");
    next();
})

const verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    if (password === 'password') {
        next();
    }
    res.send('wrong password');
})

// app.use((req, res, next) => {
//     console.log(req.method.toUpperCase(), req.path);
//     next();
// })


// app.use((req, res, next) => {
//     console.log("This is my first middleware");
//     next();
// })


app.get('/', (req, res) => {
    console.log(`Requested time is: ${req.requestTime}`);
    res.send('Home Page');
})

app.get('/dogs', (req, res) => {
    res.send('Woof');
})

app.get('/secret', verifyPassword, (req, res) => [
    res.send('Sometimes I forget my password.')
])

app.use((req, res) => {
    res.status(404).send('NOT FOUND');
})

app.listen(3000, () => {
    console.log('Localhost 3000');
})