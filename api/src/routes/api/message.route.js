'use strict'

const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/authorization')
const messageController = require('../../controllers/message.controller')

// Authentication example routes
router.post('/add', messageController.add)
router.get('/get', auth(['admin']), messageController.get)
router.post('/remove', auth(['admin']), messageController.add)

module.exports = router
