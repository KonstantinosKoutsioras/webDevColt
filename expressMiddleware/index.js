const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');

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
    throw new AppError('Password required', 401);
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

app.get('/error', (req, res) => {
    chicken.fly();
})

app.get('/dogs', (req, res) => {
    res.send('Woof');
})

app.get('/secret', verifyPassword, (req, res) => [
    res.send('Sometimes I forget my password.')
])

app.get('/admin', (req, res) => {
    throw new AppError('You do not have the admin role', 403);
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND');
})

// app.use((err, req, res, next) => {
//     console.log('*********');
//     console.log('**ERROR**');
//     console.log('*********');
//     console.log(err);
//     next(err);
// })

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something Broke' } = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log('Localhost 3000');
})