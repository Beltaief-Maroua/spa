const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    getPack:((req,res)=>{
        console.log(req.body)
        const query= "select * from pack"
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send(result)
        })
    })
}