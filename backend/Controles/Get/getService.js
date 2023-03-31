const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    getService:((req,res)=>{
        const query= `select * from service where serviceTitle="${req.params.serviceTitle}"`
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send(result)
        })
    }),
    
    getAllServices:((req,res)=>{
        const query= "select * from service"
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send(result)
        })
    }),

    getServiceID:((req,res)=>{
        const query= `select * from service where id="${req.params.id}"`
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).json(...result)
        })
    }),
}
