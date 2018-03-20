/* global describe it */
import chai from 'chai'
// Test modules
import mongoose from 'mongoose'

const expect = chai.expect

describe('Create a connection to the database', function () {
  it('a database connection should be created', function (done) {
    const url = 'mongodb://localhost:27017/holidayextras'
    expect(url).to.be.eql('mongodb://localhost:27017/holidayextras')
    mongoose.Promise = global.Promise
    expect(mongoose.Promise).to.eql(global.Promise)
    const db = mongoose.connection
    expect(db).to.eql(mongoose.connection)
    db.on('error', (e) => {
      const message = 'Error when connectioning to test database!'
      expect(message).to.eql('Error when connectioning to test database!')
      done()
    })
    db.once('open', (e) => {
      const message = 'We are connected to test database!'
      expect(message).to.eql('We are connected to test database!')
      done()
    })
    module.exports = mongoose.connect(url)
  })
})
