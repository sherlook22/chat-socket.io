const { addUser } = require('./users')

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('New connection started')

    socket.on('join', ({ name, room }, callback) => {
      const { error, user } = addUser()

      if (error) return callback(error)

      socket.emit('message', { user: 'admin', text: `${user.name}, welcom to the room ${user.room}` })
      socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.room}, has joined` })

      socket.join(user.room)

      callback()
    })

    socket.on('disconnect', () => {
      console.log('User had left')
    })
  })
}
