const router = require('express').Router()
const getReservation = require('../../Controles/Get/getReservation')
router.get('/api/getReservation',getReservation.getReservation)


module.exports = {getRoutReservation:router}

