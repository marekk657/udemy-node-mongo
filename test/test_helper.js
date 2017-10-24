const mongoose = require('mongoose');

before(done => {
    mongoose.connect('mongodb://127.0.0.1/muber_test', { useMongoClient: true });
    mongoose.connection
        .once('open', () => done())
        .once('error', err => {
            console.warn("Warning", err);
        });
});

beforeEach(done => {
    const { drivers } = mongoose.connection.collections;
    drivers.drop()
        .then(() => drivers.createIndex({ 'geometry.coordinates': '2dsphere'}))
        .then(() => done())
        .catch(() => done());
});