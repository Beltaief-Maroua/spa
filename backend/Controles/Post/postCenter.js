const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    postCenter:((req,res)=>{
        console.log(req.body)
        const query=`INSERT INTO center(centerName,centerPhone,centerMail,adress,centerImage,centerVideo,openingTime)VALUES("${req.body.centerName}","${req.body.centerPhone}","${req.body.centerMail}","${req.body.adress}","${req.body.centerImage}","${req.body.centerVideo}","${req.body.openingTime}");`
        console.log("query",query)
        connection.query(query,(error,result)=>{
        error ? res.status(500).send(error) : res.status(200).send("center has been created")
        })
    })
}

