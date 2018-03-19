'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readUserByIdCommand = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _UserModel = require('../../models/UserModel');

var _UserModel2 = _interopRequireDefault(_UserModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var readUserByIdCommand = exports.readUserByIdCommand = function readUserByIdCommand(payload) {
  return new Promise(function (resolve, reject) {
    var Schema = _mongoose2.default.model('User', _UserModel2.default);
    Schema.findOne({ 'id': payload.id }, function (error, retrievedEntry) {
      if (error) {
        console.log(error);
        reject(500);
      }
      resolve(retrievedEntry);
    });
  });
};