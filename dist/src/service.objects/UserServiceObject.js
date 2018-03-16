'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUserById = exports.updateUserById = exports.readUserById = exports.createNewUser = undefined;

var _CreateUserCommand = require('../commands/user/CreateUserCommand');

var _ReadUserByIdCommand = require('../commands/user/ReadUserByIdCommand');

var _UpdateUserByIdCommand = require('../commands/user/UpdateUserByIdCommand');

var _DeleteUserByIdCommand = require('../commands/user/DeleteUserByIdCommand');

var sanitizationChecksOfInputs = function sanitizationChecksOfInputs(values) {
  if (values.id) {
    console.log(values.id);
  }
  if (values.email) {
    console.log(values.email);
  }
  if (values.forename) {
    console.log(values.forename);
  }
  if (values.surname) {
    console.log(values.surname);
  }
  return values;
};

var createNewUser = exports.createNewUser = function createNewUser(payload) {
  return (0, _CreateUserCommand.createUserCommand)(sanitizationChecksOfInputs(payload)).then(function (result) {
    return result;
  }).catch(function (e) {
    throw e;
  });
};

var readUserById = exports.readUserById = function readUserById(payload) {
  return (0, _ReadUserByIdCommand.readUserByIdCommand)(sanitizationChecksOfInputs(payload)).then(function (result) {
    return result;
  }).catch(function (e) {
    throw e;
  });
};

var updateUserById = exports.updateUserById = function updateUserById(payload) {
  return (0, _UpdateUserByIdCommand.updateUserByIdCommand)(sanitizationChecksOfInputs(payload)).then(function (result) {
    return result;
  }).catch(function (e) {
    throw e;
  });
};

var deleteUserById = exports.deleteUserById = function deleteUserById(payload) {
  return (0, _DeleteUserByIdCommand.deleteUserByIdCommand)(sanitizationChecksOfInputs(payload)).then(function (result) {
    return result;
  }).catch(function (e) {
    throw e;
  });
};