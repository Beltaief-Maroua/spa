const router = require('express').Router()
const addReservation = require('../../Controles/Post/postReservation')
router.post('/api/postReservation',addReservation.postReservation)

module.exports = {postRoutReservation:router}

