const router = require('express').Router()
const updateCenter = require('../../Controles/Update/updateCenter')
router.put('/api/updateCenter/:id',updateCenter.updateCenter)

module.exports = {updateRoutCenter:router}