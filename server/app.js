const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

io.on('connection', (socket) => {
  console.log('io Connected')

  socket.on('createMessage', (data) => {
    setTimeout(function() {
      socket.emit('newMessage', {
        text: data.text + ' SERVER'
      })
    }, 500)
  })
})

module.exports = {
  app,
  server
}
