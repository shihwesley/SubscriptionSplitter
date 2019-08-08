const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true]
  },
  email: {
    type: String,
    required: [true],
    lowercase: true
  },
  userID: {type: String, required: [true]},
  photo: String,
  //credibility: Integer,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
