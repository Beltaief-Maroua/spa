const mysql=require('mysql2')
require('dotenv').config();
 
const connection = mysql.createConnection({
    host:"localhost", 
    user:"root",
    password:process.env.PASSWORD_DATABASE,
    database:"spa"
})
connection.connect((err)=> err ? console.log(err): 
console.log("database is alive"))
module.exports={connection}