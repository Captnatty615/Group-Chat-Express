const express = require("express");
const path = require("path")
const app = express();
const port = process.env.PORT || 4000;
const server = app.listen(port, () => console.log(`Server is running on port ${port}`));

const io = require("socket.io")(server)

app.use(express.static(path.join(__dirname, "public"))); 

let socketsConnected = new Set();

io.on("connection", onConnected)

function onConnected(socket) {
    console.log('Socket connected', socket.id)
    socketsConnected.add(socket.id)
    io.emit('clients-total', socketsConnected.size)
  
    socket.on('disconnect', () => {
      console.log('Socket disconnected', socket.id)
      socketsConnected.delete(socket.id)
      io.emit('clients-total', socketsConnected.size)
    })
  
    socket.on('message', (data) => {
       
      socket.broadcast.emit('chat-message', data)
      console.log(data)
    })
    socket.on('feedback', (data) => {
        socket.broadcast.emit('feedback', data)
      })
}