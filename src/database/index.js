const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/first-chat', { useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;