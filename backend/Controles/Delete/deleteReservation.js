const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    deleteReservation:((req,res)=>{
        const query= `DELETE FROM reservation WHERE id="${req.params.id}" `
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send("Reservation is canceled")
        })
    })
}