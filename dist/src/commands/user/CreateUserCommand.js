'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserCommand = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _UserModel = require('../../models/UserModel');

var _UserModel2 = _interopRequireDefault(_UserModel);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createUserCommand = exports.createUserCommand = function createUserCommand(payload) {
  return new Promise(function (resolve, reject) {
    if (payload === null) reject(400);
    var Schema = _mongoose2.default.model('User', _UserModel2.default);
    Schema.findOne({ 'guid': payload.guid }, function (error, retrievedEntry) {
      if (error) {
        console.log(error);
        reject(500);
      }
      if (retrievedEntry === null) {
        var entry = new Schema(payload);
        entry.guid = (0, _uuid2.default)();
        entry.save(function (error, newEntry) {
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