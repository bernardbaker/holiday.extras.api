'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _UserController = require('../../controllers/UserController');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/create', function (req, res) {
  (0, _UserController.createUser)(req, res);
});

router.post('/read', function (req, res) {
  (0, _UserController.readUser)(req, res);
});

router.patch('/update', function (req, res) {
  (0, _UserController.updateUser)(req, res);
});

router.delete('/delete', function (req, res) {
  (0, _UserController.deleteUser)(req, res);
});

router.get('/', function (req, res) {
  res.json({ message: 'user routes' });
});

exports.default = router;