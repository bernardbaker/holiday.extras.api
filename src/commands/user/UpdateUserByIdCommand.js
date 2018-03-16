import mongoose from 'mongoose'
import schema from '../../models/UserModel'

export const updateUserByIdCommand = (payload) => {
  return new Promise((resolve, reject) => {
    const Schema = mongoose.model('User', schema)
    Schema.findOne({ 'guid': payload.guid }, (error, retrievedEntry) => {
      if (error) {
        console.log(error)
        reject(500)
      }
      if (retrievedEntry !== null) {
        if(payload.forename) {
          retrievedEntry.forename = payload.forename
        }
        if(payload.surname) {
          retrievedEntry.surname = payload.surname
        }
        if(payload.email) {
          retrievedEntry.email = payload.email
        }
        retrievedEntry.save((error, newEntry) => {
          if (error) {
            console.log(error)
            reject(500)
          }
          resolve(newEntry)
        })
      } else {
        reject(400)
      }
    })
  })
}
