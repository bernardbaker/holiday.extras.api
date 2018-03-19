import mongoose from 'mongoose'
import schema from '../../models/UserModel'

export const deleteUserByIdCommand = (payload) => {
  return new Promise((resolve, reject) => {
    const Schema = mongoose.model('User', schema)
    Schema.deleteOne({ 'id': payload.id }, (error) => {
      if (error) {
        console.log(error)
        reject(500)
      }
      resolve(200)
    })
  })
}
