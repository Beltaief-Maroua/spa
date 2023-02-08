const router = require('express').Router()
const addPack = require('../../Controles/Post/postPack')
router.post('/api/postPack',addPack.postPack)

module.exports = {postRoutPack:router}

