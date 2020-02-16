/**
 * database configuration
 */
const mongoose = require('mongoose');
require('../models/userSchema');

const password = '<your password here>';
mongoose.Promise = global.Promise;
const uri = `<mongo uri here>`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => console.log('Mongodb connected...'))
  .catch((err) => console.error(err));