const {connection} = require('../../ConfigurationDB/config');
const crypto = require('crypto');
const auth = require('../../midlleware/auth');
const utile=require('../../midlleware/utile')
const session=require ('../authentification/session')

module.exports={
  CreateAdmin:((req,res)=>{
    let passwordHashed=crypto.createHash('sha256').update(req.body.adminPassword, 'utf8').digest('hex')
    const query=`INSERT INTO admin(amdinMail,adminPassword)VALUES("${req.body.amdinMail}","${passwordHashed}");`
    connection.query(query,(error,result)=>{
    error ? res.status(500).send(error) : res.status(200).send("admin has been created")
    })
}),

VerifyAdmin :(req,res)=>{
     var passwordHashed = crypto.createHash('sha256').update(req.body.adminPassword, 'utf8').digest('hex')
     const query=`select * from admin where amdinMail="${req.body.amdinMail}"`
     connection.query(query,(error,results)=>{
       if(error){
         res.status(500).send(error)
       } else if(results.length>0 && results[0].adminPassword===passwordHashed ){
        var session=utile.RandomString(32)
         auth.CreateSession(req,res,results[0].id,session)
       }else if(results.length===0 || results[0].adminPassword!==passwordHashed  ){
              res.status(200).send('somthing went wrong')
       }else{
         res.status(404).send("not found")
       }
     })
   }
  }