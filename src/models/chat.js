const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
  sent: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    message: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  },

  received: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    message: String,
    createdAt: {
      type: Date,
      default: Date.now

    }
  }


});


module.exports = mongoose.model('Chat', chatSchema);
