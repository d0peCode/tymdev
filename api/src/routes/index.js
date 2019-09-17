'use strict'

const express = require('express')
const router = express.Router()
const messageRouter = require('./api/message.route')
const adminRouter = require('./api/admin.route')
const userRouter = require('./api/user.route')
const authRouter = require('./api/auth.route')

// api status
router.get('/status', (req, res) => { res.send({status: 'OK'}) })

router.use('/message', messageRouter)
router.use('/admin', adminRouter)
router.use('/user', userRouter)
router.use('/auth', authRouter)

module.exports = router
