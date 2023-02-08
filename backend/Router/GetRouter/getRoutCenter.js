const router = require('express').Router()
const getCenter = require('../../Controles/Get/getCenter')
router.get('/api/getCenter',getCenter.getCenter)

module.exports = {getRoutCenter:router}

