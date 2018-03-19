'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./src/routes');

var _routes2 = _interopRequireDefault(_routes);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _db = require('./src/util/db');

var _db2 = _interopRequireDefault(_db);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chai = require('chai');
var expect = chai.expect;

describe('Create an Express server', function () {

  it('a server should be listening on port 3000', function (done) {
    // Create express app
    var app = (0, _express2.default)();

    // Specify port to listen on
    var PORT = process.env.PORT || 3000;

    // Use CORS
    app.use((0, _cors2.default)());
    // Parse body content sent in requests
    app.use(_bodyParser2.default.urlencoded({ extended: true }));
    // Use JSON body parser
    app.use(_bodyParser2.default.json());

    // Pass app to routes serving API end points
    (0, _routes2.default)(app);

    // Create a server (https/http can be switched in and out with CERTS)
    var server = _http2.default.createServer(app).listen(PORT, function () {
      // Utility for service discovery
      var os = require('os');
      var ifaces = os.networkInterfaces();

      // Iterate through key values of network interfaces
      (0, _keys2.default)(ifaces).forEach(function (ifname) {
        var alias = 0;

        // Loop through interface names
        ifaces[ifname].forEach(function (iface) {
          if ('IPv4' !== iface.family || iface.internal !== false) {
            // Skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
            return;
          }
          if (alias >= 1) {
            // This single interface has multiple ipv4 addresses
            console.log(ifname + ':' + alias, iface.address);
          } else {
            // This interface has only one ipv4 adress
            console.log('server running at', ifname, iface.address, PORT);
          }
          ++alias;
        });
      });

      expect(PORT).to.be.eql(3000);

      done();
    });
  });
});