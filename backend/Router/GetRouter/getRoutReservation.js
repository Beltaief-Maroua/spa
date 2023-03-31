const router = require('express').Router()
const getReservation = require('../../Controles/Get/getReservation')
router.get('/api/getReservation',getReservation.getReservation)
router.get('/api/getReservationId/:id',getReservation.getReservationId)

module.exports = {getRoutReservation:router}

