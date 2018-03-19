import express from 'express'
import routes from './src/routes'
import bodyParser from 'body-parser'
import database from './src/util/db'
import cors  from 'cors'
import http from 'http'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
 
routes(app)
 
const server = http.createServer(app).listen(PORT, () => {
  // Utility service discovery
  const os = require('os')
  const ifaces = os.networkInterfaces()

  Object.keys(ifaces).forEach(function (ifname) {
    let alias = 0

    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return
      }
      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        console.log(ifname + ':' + alias, iface.address)
      } else {
        // this interface has only one ipv4 adress
        console.log('server running at', ifname, iface.address, PORT)
      }
      ++alias
    })
  })
})
