const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    getCenter:((req,res)=>{
        const query= "select * from center"
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send(result)
        })
    })
}