const router = require('express').Router()
const getService = require('../../Controles/Get/getService')
router.get('/api/getService',getService.getService)

module.exports = {getRoutService:router}

