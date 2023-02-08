const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    postReservation:((req,res)=>{
        console.log(req.body)
        const query=`INSERT INTO reservation(user_id,pack_id,totalPrice,date,hour,payment)VALUES("${req.body.user_id}","${req.body.pack_id}","${req.body.totalPrice}","${req.body.date}","${req.body.hour}","${req.body.payment}");`
        console.log("query",query)
        connection.query(query,(error,result)=>{
        error ? res.status(500).send(error) : res.status(200).send("reservation has been registered")
        })
    })
}