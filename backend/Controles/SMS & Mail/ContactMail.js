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
    console.log(req.body)
              var subject = req.body.subject
            var message = req.body.message
        
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
            <h1> Nouveau Message </h1>
                <div class="container">
                  <h2>Sujet :
                    <p> ${subject} </p>
                  </h2>
                  <h2>Message :
                    <p> ${message} </p>
                  </h2>
                </div>
            </body>
            </html>`
            var mail = {
                to : "beltaief.maroua@gmail.com",
                Subject : subject,
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
    
    
module.exports = {
    nodmail,
};