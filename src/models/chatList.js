const mongoose = require('mongoose');

const ChatListSchema = new mongoose.Schema({
  chatlist: String
});

module.exports = mongoose.model('ChatList', ChatListSchema);
