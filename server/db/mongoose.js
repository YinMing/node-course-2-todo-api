var mongoose = require('mongoose');

mongoose.Promoise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/TodoApp');

module.exports = { mongoose };
