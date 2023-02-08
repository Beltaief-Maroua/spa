const router = require('express').Router()
const deleteReservation = require('../../Controles/Delete/deleteReservation')
router.delete('/api/deleteReservation/:id',deleteReservation.deleteReservation)

module.exports = {deleteRoutReservation:router}

