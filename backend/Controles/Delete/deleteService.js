const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    deleteService:((req,res)=>{
        const query= `DELETE FROM service WHERE id="${req.params.id}" `
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send("service is deleted")
        })
    })
}