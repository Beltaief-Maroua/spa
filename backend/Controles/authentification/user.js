const {connection} = require('../../ConfigurationDB/config');
const crypto = require('crypto');
const auth = require('../../midlleware/auth');
const utile=require('../../midlleware/utile')
const session=require ('../authentification/session')

module.exports={
  CreateUser:((req,res)=>{
   let lastAtPos = req.body.userMail.lastIndexOf('@');
       let lastDotPos = req.body.userMail.lastIndexOf('.');
     let passwordHashed=crypto.createHash('sha256').update(req.body.userPassword, 'utf8').digest('hex')
     let query=`select * from user where userMail="${req.body.userMail}"`
      connection.query(query,(error,results)=>{
   if(error){
     res.status(500).send(error)
   }else if((results.length>0 &&results[0].userMail===req.body.userMail)) {
     res.status(200).send("user exist")
   }else if(!results.length && results===undefined){
     res.status(202).send("check somthing went wrong!")
   }else if((!(lastAtPos < lastDotPos && lastAtPos > 0 && req.body.userMail.indexOf('@@') === -1 && lastDotPos > 2 && (req.body.userMail.length - lastDotPos) > 2))  ){
     res.status(400).send('format invalid')
   }else{
     let query=`INSERT INTO user(userName,userPhone,userMail,userPassword,confirmUserPassword,role)VALUES("${req.body.userName}","${req.body.userPhone}","${req.body.userMail}","${passwordHashed}","${passwordHashed}","${req.body.role}")`
     connection.query(query,(error,results)=>{
       if(error){
         res.status(500).send(error)
       }else{
         res.status(200).send("user created")
       } 
     })
   }
     })
 }),

 
 
   VerifyUser :(req,res)=>{
    console.log(req.body)
     var passwordHashed = crypto.createHash('sha256').update(req.body.userPassword, 'utf8').digest('hex')
     const query=`select * from user where userMail="${req.body.userMail}"`
     connection.query(query,(error,results)=>{
       if(error){
         res.status(500).send(error)
       } else if(results.length>0 && results[0].userPassword===passwordHashed ){
        var session=utile.RandomString(32)
         auth.CreateSession(req,res,results[0].id,session)
       }else if(results.length===0 || results[0].userPassword!==passwordHashed  ){
              res.status(200).send('somthing went wrong')
       }else{
         res.status(404).send("not found")
       }
     })
   },


   Logout:(req,res)=>{
     console.log(req.cookies)
     session.Delete(req.cookies.test).then((result)=>{
       if(result){
         res.status(200).send('user logout')
       }
     }).catch((err)=>{
       res.status(500).send(err)
     })
   },

   
   GetUser:(req,res)=>{
    const query=`select * from user where id="${req.params.id}"`
    connection.query(query,(error,result)=>{
      error ? res.status(500).send(error) : res.status(200).send(result)
    })
  },

   DeleteUser:(req,res)=>{
    const query=`delete from user where id="${req.params.id}"`
    connection.query(query,(error,result)=>{
      error ? res.status(500).send(error) : res.status(200).send(result)
    })
  },
   
   UpdateUser:(req,res)=>{
    const query = `UPDATE user SET userName="${req.body.userName}",userPhone="${req.body.userPhone}",userMail="${req.body.userMail}",userPassword="${passwordHashed}",confirmUserPassword="${passwordHashed}",role="${req.body.role}" WHERE id="${req.params.id}"`;
    connection.query(query, (error, result) => {
      error ? res.status(500).send(error) : res.status(200).send('Update User OK');
    });
   }
}
