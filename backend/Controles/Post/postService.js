const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    postService:((req,res)=>{
        const query=`INSERT INTO service(serviceTitle,serviceName,servicePrice,serviceImage,serviceDescription)VALUES("${req.body.serviceTitle}","${req.body.serviceName}","${req.body.servicePrice}","${req.body.serviceImage}","${req.body.serviceDescription}");`
        connection.query(query,(error,result)=>{
        error ? res.status(500).send(error) : res.status(200).send("service has been created")
        })
    })
}


