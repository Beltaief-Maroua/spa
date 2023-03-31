const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    postReservation:((req,res)=>{
        const query=`INSERT INTO reservation(user_id,userName,userMail,userPhone,packName,serviceName,totalPrice,date,hour,payment)VALUES("${req.body.user_id}","${req.body.userName}","${req.body.userMail}","${req.body.userPhone}","${req.body.packName}","${req.body.serviceName}","${req.body.totalPrice}","${req.body.date}","${req.body.hour}","${req.body.payment}");`
        connection.query(query,(error,result)=>{
        error ? res.status(500).send(error) : res.status(200).send("reservation has been registered")
        })
    })
}


