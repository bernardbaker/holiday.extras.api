'use strict';

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

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

app.use((0, _cors2.default)());
app.use(_bodyParser2.default.urlencoded({ limit: '50mb', extended: true }));
app.use(_bodyParser2.default.json({ limit: '50mb' }));

(0, _routes2.default)(app);

var server = _http2.default.createServer(app).listen(PORT, function () {
  // Utility service discovery
  var os = require('os');
  var ifaces = os.networkInterfaces();

  Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;

    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }

      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        console.log(ifname + ':' + alias, iface.address);
      } else {
        // this interface has only one ipv4 adress
        console.log('server running at', ifname, iface.address, PORT);
      }
      ++alias;
    });
  });
});
