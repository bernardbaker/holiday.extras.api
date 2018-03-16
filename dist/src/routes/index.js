'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserRoutes = require('./User/UserRoutes');

var _UserRoutes2 = _interopRequireDefault(_UserRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = function routes(app) {
  app.use('/user', _UserRoutes2.default);

  app.route('/').get(function (req, res) {
    res.json('api root');
  });
};

exports.default = routes;