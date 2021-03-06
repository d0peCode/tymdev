'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  phone: {
    type: String,
    minlength: 7,
    maxlength: 14
  },
  message: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Message', messageSchema)
