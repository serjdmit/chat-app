const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const message = (name, text, id) => ({ name, text, id })

io.on('connection', (socket) => {
  socket.on('userJoined', (data, cb) => {
    if (!data.name || !data.room) {
      return cb('Data is not correct')
    }

    socket.join(data.room)
    cb({ userId: socket.id })
    socket.emit('newMessage', message('admin', `Welcome ${data.name}.`))
    socket.broadcast
      .to(data.room)
      .emit('newMessage', message('admin', `User ${data.name} joined.`))
      .emit('newMessage', message('TEST', 'asdasd.'))
  })

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
