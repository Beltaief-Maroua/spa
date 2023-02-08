const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    deletePack:((req,res)=>{
        console.log(req.body)
        const query= `DELETE FROM pack WHERE id="${req.params.id}" `
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send("Pack is deleted")
        })
    })
}