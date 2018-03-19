import  mongoose from 'mongoose'
import moment from 'moment'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  id: {
    type: String
  },
  email: {
    type: String
  },
  forename: {
    type: String,
	  default: ""
  },
  surname: {
    type: String,
	  default: ""
  },
  created: {
    type: Date,
    default: moment()
  },
})

export default UserSchema;