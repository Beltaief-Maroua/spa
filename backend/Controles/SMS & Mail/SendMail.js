const nodemailer = require('nodemailer');
const {connection}=require("../../ConfigurationDB/config")
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service : "beltaief.maroua@gmail.com", 
    port : 587,
    host : 'smtp.gmail.com',
    secure : false,
    auth : {
        user : process.env.EMAIL,
        pass : process.env.PASSWORD
    },
    tls : {
        rejectUnauthorized: false,
    }
});

transporter.verify(function(error, success){
    if (error){
        console.log(error,'server error');
    } else {
        console.log('server is ready to take our Messages');
    }
});

const nodmail = async(req, res, next) => {
    console.log(req.params)
    const query= `select * from reservation where user_id=${req.params.id}`
    connection.query(query,(error,result)=>{
        console.log(result)
        if(result){
            var payement 
            var userMail = result[0].userMail
            var userPhone = result[0].userPhone
            var userName = result[0].userName
            var packName = result[0].packName
            var serviceName = result[0].serviceName
            var totalPrice = result[0].totalPrice
            var date = result[0].date
            var hour = result[0].hour
             result[0].payment===0?payement="Au centre":payement="En ligne"
            let html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
            <img src="https://www.bobio.tn/img/bobio-logo-1536767027.jpg" />
            <h1> Nouvelle réservation pour le ${date} à ${hour} </h1>
                <div class="container">
                  <h2>M./Mme ${userName}</h2>
                  <p> Service réservé : ${serviceName?serviceName:"pas de service choisi"}</p>
                  <p> Prix total : ${totalPrice}
                  <p> Paiement : ${payement}</p>
                </div>
            </body>
            </html>`
            var mail = {
                from : userMail,
                to : "beltaief.maroua@gmail.com",
                Subject : userPhone,
                text : userName,
                html : html
        }

        transporter.sendMail(mail, (err,data) =>{
            if (err) {
                res.json({
                    status : 'fail'
                })
            } else {
                res.json({
                    status: 'success'
                })
            }
        })
    }
    })
    }
module.exports = {
    nodmail,
};