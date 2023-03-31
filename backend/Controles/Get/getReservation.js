const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    getReservation:((req,res)=>{
        const query= "select * from reservation"
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send(result)
        })
    }),
    getReservationId:((req,res)=>{
        const query= `select * from reservation where user_id=${req.params.id}`
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send(result)
        })
    })
}