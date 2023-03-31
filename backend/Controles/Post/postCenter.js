const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    postCenter:((req,res)=>{
        const query=`INSERT INTO center(centerName,centerPhone,centerMail,adress,centerImage,openingTime)VALUES("${req.body.centerName}","${req.body.centerPhone}","${req.body.centerMail}","${req.body.adress}","${req.body.centerImage}","${req.body.openingTime}");`
        connection.query(query,(error,result)=>{
        error ? res.status(500).send(error) : res.status(200).send("center has been created")
        })
    })
}

