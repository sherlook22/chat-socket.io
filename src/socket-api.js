module.exports = (io) => {
  io.on('connect', (socket) => {
    console.log('New connection')
  })
}
