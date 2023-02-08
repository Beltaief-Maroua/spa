const router = require('express').Router()
const updatePack = require('../../Controles/Update/updatePack')
router.put('/api/updatePack/:id',updatePack.updatePack)

module.exports = {updateRoutPack:router}