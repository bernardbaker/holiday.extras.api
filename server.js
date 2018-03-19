import express from 'express'
import routes from './src/routes'
import bodyParser from 'body-parser'
import database from './src/util/db'
import cors  from 'cors'
import http from 'http'

// Create express app
const app = express()
// Specify port to listen on
const PORT = process.env.PORT || 3000

// Use CORS
app.use(cors())
// Parse body content sent in requests
app.use(bodyParser.urlencoded({ extended: true }))
// Use JSON body parser
app.use(bodyParser.json());

// Pass app to routes serving API end points
routes(app)

// Create a server (https/http can be switched in and out with CERTS)
const server = http.createServer(app).listen(PORT, () => {
  // Utility for service discovery
  const os = require('os')
  const ifaces = os.networkInterfaces()

  // Iterate through key values of network interfaces
  Object.keys(ifaces).forEach(function (ifname) {
    let alias = 0

    // Loop through interface names
    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // Skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return
      }
      if (alias >= 1) {
        // This single interface has multiple ipv4 addresses
        console.log(ifname + ':' + alias, iface.address)
      } else {
        // This interface has only one ipv4 adress
        console.log('server running at', ifname, iface.address, PORT)
      }
      ++alias
    })
  })
})
