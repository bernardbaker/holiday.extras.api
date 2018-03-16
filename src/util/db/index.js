import mongoose from 'mongoose'
mongoose.Promise = global.Promise;
module.exports = mongoose.connect(process.env.NODE_ENV === 'development' ? 'mongodb://localhost:27017/imarsh' : 'mongodb://heroku_4n73k8gn:kckkk5dsht3e4u5m0iv4qgtnvd@ds239097.mlab.com:39097/heroku_4n73k8gn')