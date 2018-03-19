/*
import mongoose from 'mongoose'
let chai = require('chai')
const expect = chai.expect;
import schema from '../src/models/UserModel'
import uuid from 'uuid'

describe('Command Add User', function() {

  it('a new user should be added to the database', function(done) {

    const User = mongoose.model('User', schema)

    beforeEach(function (done) {
      mongoose.connect('mongodb://localhost/holidayextras')
      const db = mongoose.connection
      db.on('error', console.error.bind(console, 'connection error'))
      db.once('open', function() {
        console.log('We are connected to test database!')
        done()
      })
    })

    describe('Test Database Insert', function() {
      //Save object with 'name' value of 'Mike"
      it('New user saved to test database', function(done) {
        var test = User({
          id: uuid(),
          email: 'jon.bloggs@domain.com',
          forename: 'jon',
          surname: 'bloggs'
        });
        test.save()
        done()
      });
    });
    //After all tests are finished close connection
    after(function(done){
      mongoose.connection.close(done)  
    })

    done()
  })
})
*/
"use strict";