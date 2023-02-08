const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    getService:((req,res)=>{
        console.log(req.body)
        const query= "select * from service"
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send(result)
        })
    })
}