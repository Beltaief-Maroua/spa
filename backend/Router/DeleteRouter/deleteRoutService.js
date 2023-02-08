const router = require('express').Router()
const deleteService = require('../../Controles/Delete/deleteService')
router.delete('/api/deleteService/:id',deleteService.deleteService)

module.exports = {deleteRoutService:router}

