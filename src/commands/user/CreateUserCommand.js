import mongoose from 'mongoose'
import schema from '../../models/UserModel'

export const createUserCommand = (payload) => {
  return new Promise((resolve, reject) => {
    const Schema = mongoose.model('User', schema)
    Schema.findOne({ 'email': payload.email }, (error, retrievedEntry) => {
      if (error) {
        reject(error)
      }
      if (retrievedEntry === null) {
        let entry = new Schema(payload)
        entry.save((error, newEntry) => {
          if (error) {
            reject(error)
          }
          resolve(newEntry)
        })
      } else {
        reject(new Error('aready in the db'))
      }
    })
  })
}
