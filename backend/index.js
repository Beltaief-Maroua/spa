const express = require('express')
const app = express()
const port = 3090
const cors = require('cors')
const cookieParser = require('cookie-parser')

//Authentification Crud
const {userRouter}=require('./Router/AuthRouter/userRouter')

// Center Crud
const {postRoutCenter}=require('./Router/PostRouter/postRoutCenter')
const {getRoutCenter}=require('./Router/GetRouter/getRoutCenter')
const {updateRoutCenter}=require('./Router/UpdateRouter/updateRoutCenter')
const {deleteRoutCenter}=require('./Router/DeleteRouter/deleteRoutCenter')

// Service Crud
const {postRoutService}=require('./Router/PostRouter/postRoutService')
const {getRoutService}=require('./Router/GetRouter/getRoutService')
const {updateRoutService}=require('./Router/UpdateRouter/updateRoutService')
const {deleteRoutService}=require('./Router/DeleteRouter/deleteRoutService')

// Pack Crud
const {postRoutPack}=require('./Router/PostRouter/postRoutPack')
const {getRoutPack}=require('./Router/GetRouter/getRoutPack')
const {updateRoutPack}=require('./Router/UpdateRouter/updateRoutPack')
const {deleteRoutPack}=require('./Router/DeleteRouter/deleteRoutPack')


// Reservation Crud
const {postRoutReservation}=require('./Router/PostRouter/postRoutReservation')
const {getRoutReservation}=require('./Router/GetRouter/getRoutReservation')
const {updateRoutReservation}=require('./Router/UpdateRouter/updateRoutReservation')
const {deleteRoutReservation}=require('./Router/DeleteRouter/deleteRoutReservation')


app.use(
    cors({
        origin:'http://localhost:3000',
        credentials:false,
        optionsSuccessStatus:200
    })
)

app.use(cookieParser())
app.use(express.json())

//Authentification Crud
app.use('/',userRouter)

// Center Crud
app.use('/',postRoutCenter)
app.use('/',getRoutCenter)
app.use('/',updateRoutCenter)
app.use('/',deleteRoutCenter)

//Service Crud
app.use('/',postRoutService)
app.use('/',getRoutService)
app.use('/',updateRoutService)
app.use('/',deleteRoutService)

// Pack Crud
app.use('/',postRoutPack)
app.use('/',getRoutPack)
app.use('/',updateRoutPack)
app.use('/',deleteRoutPack)

// Reservation Crud
app.use('/',postRoutReservation)
app.use('/',getRoutReservation)
app.use('/',updateRoutReservation)
app.use('/',deleteRoutReservation)


app.listen(port, ()=>{
    console.log('http://localhost:'+port)
    console.log('server is alive')
})


