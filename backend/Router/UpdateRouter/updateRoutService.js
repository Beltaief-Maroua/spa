const router = require('express').Router()
const updateService = require('../../Controles/Update/updateService')
router.put('/api/updateService/:id',updateService.updateService)

module.exports = {updateRoutService:router}