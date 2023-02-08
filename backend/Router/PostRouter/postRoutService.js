const router = require('express').Router()
const addService = require('../../Controles/Post/postService')
router.post('/api/postService',addService.postService)

module.exports = {postRoutService:router}