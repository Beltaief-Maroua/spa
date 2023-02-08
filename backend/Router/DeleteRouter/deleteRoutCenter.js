const router = require('express').Router()
const deleteCenter = require('../../Controles/Delete/deleteCenter')
router.delete('/api/deleteCenter/:id',deleteCenter.deleteCenter)

module.exports = {deleteRoutCenter:router}

