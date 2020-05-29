const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
    text: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
    text: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
});

module.exports = mongoose.model('Message', MessageSchema);
