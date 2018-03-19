import mongoose from 'mongoose'
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost:27017/holidayextras')