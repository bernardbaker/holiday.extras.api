import  mongoose from 'mongoose'
import moment from 'moment'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  guid: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  createdAt: {
    type: Date,
    default: moment()
  },
  forename: {
	  type: String,
	  default: ""
  },
  surname: {
	  type: String,
	  default: ""
  }
})

export default UserSchema;