'use strict'

const Message = require('../models/message.model')
const httpStatus = require('http-status')

exports.add = async (req, res, next) => {
  try {
    const message = new Message(req.body)
    await message.save()
    res.status(httpStatus.CREATED)
    res.send({ message: 'OK' })
  } catch (e) {
    return next(e);
  }
}

exports.get = async (req, res, next) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (e) {
    return next(e);
  }
}

exports.remove = async (req, res, next) => {
  try {
    await Message.findByIdAndRemove(req.query.id);
    res.json({ message: 'OK' })
  } catch (e) {
    return next(e);
  }
}

