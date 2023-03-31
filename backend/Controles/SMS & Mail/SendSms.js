const {connection}= require('../../ConfigurationDB/config')
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
require('dotenv').config();

module.exports = {
    sendSms:((req,res)=>{
        client.messages
        .create({
           body: `Réservation enregistrée pour le ${req.body.date} à ${req.body.hour}`,
           from: '+18653838990',
           to: req.body.SMS
         })
        .then((message)=>{
            console.log(message,'hey')
        }).catch((err)=>{
            console.log(err,'erreuuuuur')
        })
    }),
    
}