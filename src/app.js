const app = require('express')()
const socketApi = require('./socket-api')
const server = require('http').createServer(app)
const router = require('./router/index')

// const server = http.createServer(app)
const io = require('socket.io')(server, { cors: { origin: '*' } })
socketApi(io)

app.use(router)

module.exports = server
