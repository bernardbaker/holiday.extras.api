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
    var re = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    var validId = re.test(String(values.id));
    if (!validId) {
      return null;
    }
  }
  if (values.email) {
    var _re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var validEmail = _re.test(String(values.email).toLowerCase());
    if (!validEmail) {
      return null;
    }
  }
  if (values.forename) {
    var _re2 = /[a-zA-Z ]/;
    var validForename = _re2.test(String(values.forename).toLowerCase());
    if (!validForename) {
      return null;
    }
  }
  if (values.surname) {
    var _re3 = /[a-zA-Z \']/;
    var validSurname = _re3.test(String(values.surname).toLowerCase());
    if (!validSurname) {
      return null;
    }
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