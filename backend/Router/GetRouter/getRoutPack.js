const router = require('express').Router()
const getPack = require('../../Controles/Get/getPack')
router.get('/api/getPack',getPack.getPack)

module.exports = {getRoutPack:router}

