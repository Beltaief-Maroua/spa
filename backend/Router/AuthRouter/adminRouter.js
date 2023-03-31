const router = require('express').Router()
const {isAuth} = require('../../midlleware/isAuth')
const adminControler = require('../../Controles/authentification/admin')

router.post('/api/createAdmin',adminControler.CreateAdmin)
router.post('/api/loginAdmin',adminControler.VerifyAdmin)
router.get('/api/current',isAuth,(req,res)=>{
    res.send({utilisateur:req.user})
})


module.exports = {adminRouter:router}