const router = require('express').Router()
const deletePack = require('../../Controles/Delete/deletePack')
router.delete('/api/deletePack/:id',deletePack.deletePack)

module.exports = {deleteRoutPack:router}

