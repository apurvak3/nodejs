const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,  // Use lowercase 'true'
  },
  to: {
    type: String,
    required: true,  // Use lowercase 'true'
  },
  message: {
    type: String,
    required: true,  // Use lowercase 'true'
  },
  created_at: {
    type: Date,
    default: Date.now,
  }
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
