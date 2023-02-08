const router = require('express').Router()
const updateReservation = require('../../Controles/Update/updateReservation')
router.put('/api/updateReservation/:id',updateReservation.updateReservation)

module.exports = {updateRoutReservation:router}