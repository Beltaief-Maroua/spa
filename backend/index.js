const express = require('express')
const app = express()
const port = 3090
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
require('dotenv').config()
const stripe = require('stripe')("sk_test_51MMpjZChi0gDpptvauc2zK6wZO8Q2vfJrQFelljkA5pecB3di0mGmfmcWVI7IIezXqn6A1AXmJwgs3APLWJtRFC800V7dXHVDb");

//Authentification Crud
const {userRouter}=require('./Router/AuthRouter/userRouter')
const {adminRouter} = require('./Router/AuthRouter/adminRouter')


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

// SMS & Mail Crud
const {routerSMS}=require('./Router/SMS & Mail Router/routerSMS')
const {routerMail}=require('./Router/SMS & Mail Router/routerMail')



// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         credentials:false,
//         optionsSuccessStatus:200
//     })
// )

app.use(cookieParser())
app.use(express.json())
// app.use(bodyParser.json());
app.use((req, res, next) => {
  req.stripe = stripe;
  next();
});

app.post('/create-payment-intent', async (req, res) => {
    const { amount, currency } = req.body;
  
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
      });
      res.status(200).send({ clientSecret: paymentIntent.client_secret,publicKey:"sk_test_51MMpjZChi0gDpptvauc2zK6wZO8Q2vfJrQFelljkA5pecB3di0mGmfmcWVI7IIezXqn6A1AXmJwgs3APLWJtRFC800V7dXHVDb" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Unable to create payment intent' });
    }
  });
  
  app.post('/confirm-payment', async (req, res) => {

    const { paymentIntClientSecret, billingDetails, card, paymentMethodType } = req.body;
    try {
      const paymentIntent = await stripe.paymentIntents.confirm(paymentIntClientSecret, {
        payment_method_data: {
          card,
          billing_details: billingDetails,
          type: paymentMethodType
        },
      });
  console.log(paymentIntent)
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Unable to confirm payment' });
    }
  });

//Authentification Crud
app.use('/',userRouter)
app.use('/',adminRouter)

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

// SMS & Mail Crud
app.use('/',routerSMS)
app.use('/',routerMail)


app.listen(port, ()=>{
    console.log('http://localhost:'+port)
    console.log('server is alive')
})


