const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Mongo connection open'))
    .catch(err => console.log('ERROR\n', err))

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: { id: false },
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        street: '123 Street',
        city: 'New City',
        state: 'Alabama',
        country: 'Angola'
    })
    const res = await u.save();
    console.log(res);
}

const addAdrress = async (id) => {
    const u = await User.findById(id);
    u.addresses.push({
        street: '124 Street',
        city: 'New Gity',
        state: 'Alaboma',
        country: 'Anglola'
    })
    const res = await u.save();
    console.log(res);
}

addAdrress('6156f6cb541a420cb1f73d2e').then(() => mongoose.connection.close());