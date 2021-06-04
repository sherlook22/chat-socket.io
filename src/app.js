const app = require('express')()
const socketio = require('socket.io')
const http = require('http')
const router = require('./router/index')

app.use('/api', router)
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
  console.log('New connection started')

  socket.on('disconnect', () => {
    console.log('Disconect')
  })
})

module.exports = app
