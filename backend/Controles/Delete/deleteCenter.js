const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    deleteCenter:((req,res)=>{
        const query= `DELETE FROM center WHERE id="${req.params.id}" `
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send("Center is deleted")
        })
    })
}