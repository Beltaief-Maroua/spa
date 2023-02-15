const router = require('express').Router()
const userControler = require('../../Controles/authentification/user')
router.post('/api/createUser',userControler.CreateUser)
router.post('/api/login',userControler.VerifyUser)
router.get('/api/getUser/:id',userControler.GetUser)
router.get('/api/logout',userControler.Logout)
router.delete('/api/unsubscribe',userControler.DeleteUser)
router.put('/api/updateUser',userControler.UpdateUser)

module.exports = {userRouter:router}