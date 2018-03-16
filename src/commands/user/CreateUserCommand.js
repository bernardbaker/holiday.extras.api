import mongoose from 'mongoose'
import schema from '../../models/UserModel'
import uuid from 'uuid'

export const createUserCommand = (payload) => {
  return new Promise((resolve, reject) => {
    if (payload === null) reject(400)
    const Schema = mongoose.model('User', schema)
    Schema.findOne({ 'guid': payload.guid }, (error, retrievedEntry) => {
      if (error) {
        console.log(error)
        reject(500)
      }
      if (retrievedEntry === null) {
        let entry = new Schema(payload)
        entry.guid = uuid()
        entry.save((error, newEntry) => {
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
