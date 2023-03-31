const router = require('express').Router()
const sendSms = require('../../Controles/SMS & Mail/SendSms')
router.post('/api/sendSms',sendSms.sendSms)

module.exports = {routerSMS:router}

