const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    postPack:((req,res)=>{
        console.log(req.body)
        const query=`INSERT INTO pack(packName,packPrice,packImage,packVideo,packDescription)VALUES("${req.body.packName}","${req.body.packPrice}","${req.body.packImage}","${req.body.packVideo}","${req.body.packDescription}");`
        console.log("query",query)
        connection.query(query,(error,result)=>{
        error ? res.status(500).send(error) : res.status(200).send("pack has been created")
        })
    })
}
