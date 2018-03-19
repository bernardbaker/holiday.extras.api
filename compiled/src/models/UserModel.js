'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var UserSchema = new Schema({
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
    default: (0, _moment2.default)()
  }
});

exports.default = UserSchema;