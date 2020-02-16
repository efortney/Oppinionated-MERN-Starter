const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  ID: String,
  picture: String,
  email: String,
  firstName: String,
  lastName: String,
  totalQuestionsAsked: Number,
  totalQuestionsAnswered: Number,
  interests: [],
});

mongoose.model('users', userSchema);