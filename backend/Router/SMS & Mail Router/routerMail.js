const router = require('express').Router();
const mailControler = require('../../Controles/SMS & Mail/SendMail');
const contactMail = require('../../Controles/SMS & Mail/ContactMail');
router.post('/api/sendMail/:id', mailControler.nodmail);
router.post('/api/contactMail',contactMail.nodmail);

module.exports = {routerMail:router};