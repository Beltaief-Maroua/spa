const router = require('express').Router()
const getService = require('../../Controles/Get/getService')
router.get('/api/getService/:serviceTitle',getService.getService)
router.get('/api/getAllServices',getService.getAllServices)
router.get('/api/getServiceID/:id',getService.getServiceID)

module.exports = {getRoutService:router}

