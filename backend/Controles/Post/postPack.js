const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    postPack:((req,res)=>{
        const query=`INSERT INTO pack(packName,packPrice,packImage,packDescription)VALUES("${req.body.packName}","${req.body.packPrice}","${req.body.packImage}","${req.body.packDescription}");`
        connection.query(query,(error,result)=>{
        error ? res.status(500).send(error) : res.status(200).send("pack has been created")
        })
    })
}
