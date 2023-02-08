const router = require('express').Router()
const addCenter = require('../../Controles/Post/postCenter')
router.post('/api/postCenter',addCenter.postCenter)

module.exports = {postRoutCenter:router}

