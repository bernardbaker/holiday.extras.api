import  mongoose from 'mongoose'
import moment from 'moment'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  status: {
    type: Boolean,
    default: true
  },
  guid: {
    type: String
  },
  reference: {
    type: String
  },
  email: {
    type: String,
    required: 'Please provide an email address'
  },
  password: {
    type: String,
    required: 'Please provide a password'
  },
  tokens:[{
    token:String,
    access:String
  }],
  createdAt: {
    type: Date,
    default: moment()
  },
  firstName: {
	  type: String,
	  default: ""
  },
  lastName: {
	  type: String,
	  default: ""
  },
  age: {
	  type: Number,
	  default: 0
  },
  gender: {
	  type: String,
	  default: ""
  },
  activity:[{
    what: String,
    when: String,
    where: Object
  }],
  connections:[{
    id: String
  }]
})

export default UserSchema;