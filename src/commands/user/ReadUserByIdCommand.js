import mongoose from 'mongoose'
import schema from '../../models/UserModel'

export const readUserByIdCommand = (payload) => {
  return new Promise((resolve, reject) => {
    const Schema = mongoose.model('User', schema)
    Schema.findOne({ 'id': payload.id }, (error, retrievedEntry) => {
      if (error) {
        console.log(error)
        reject(500)
      }
      resolve(retrievedEntry)
    })
  })
}
