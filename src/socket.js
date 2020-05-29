
const {
  addUser, removeUser, getUser, getUsersInRoom
} = require('./helper/users');

const Chat = require('./models/chatList');

const initializesocket = (io) => {
  io.on('connection', (socket) => {
    console.log('user connected');
    // Join a chat
    socket.on('join', ({ username, chatee }, callback) => {
      console.log(chatee, username);
      const { error, user } = addUser({ id: socket.id, username, chatee });

      if (error) return callback(error);

      socket.emit('message', { user: 'admin', text: `This is beginning of your chat with ${user.chatee}` });

      socket.join(user.chatee);

      callback();
    });

    socket.on('sendMessage', (message) => {
      const user = getUser(socket.id);
console.log('-->', message)
      io.to(user.chatee).emit('message', { user: user.username, text: message });

    });

    socket.on('text', ({ text }) => {
      const te = { chattext: text };
      Chat.create(te, (err, simtext) => {
        if (err) {
          console.log('erorr');
        } else {
          const then = simtext;
          console.log(then);
          socket.emit('recieved', { then });
        }
      });
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};

module.exports = initializesocket;
