
const {
   getUser, getUsersInRoom
} = require('./helper/users');

const Chat = require('./models/chat');
const User = require('./models/user');

const initializesocket = (io) => {
  io.on('connection', (socket) => {
    console.log('user connected');

    // Join a chat
    socket.on('join', ({ currentUser, secondUser }, callback) => {
      console.log(currentUser, secondUser);
    })
  })}

module.exports = initializesocket;
