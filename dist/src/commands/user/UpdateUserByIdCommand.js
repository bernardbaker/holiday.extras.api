'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserByIdCommand = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _UserModel = require('../../models/UserModel');

var _UserModel2 = _interopRequireDefault(_UserModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateUserByIdCommand = exports.updateUserByIdCommand = function updateUserByIdCommand(payload) {
  return new Promise(function (resolve, reject) {
    var Schema = _mongoose2.default.model('User', _UserModel2.default);
    Schema.findOne({ 'guid': payload.guid }, function (error, retrievedEntry) {
      if (error) {
        console.log(error);
        reject(500);
      }
      if (retrievedEntry !== null) {
        if (payload.forename) {
          retrievedEntry.forename = payload.forename;
        }
        if (payload.surname) {
          retrievedEntry.surname = payload.surname;
        }
        if (payload.email) {
          retrievedEntry.email = payload.email;
        }
        retrievedEntry.save(function (error, newEntry) {
          if (error) {
            console.log(error);
            reject(500);
          }
          resolve(newEntry);
        });
      } else {
        reject(400);
      }
    });
  });
};