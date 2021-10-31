const router = require('express').Router()
const {loginGetController,loginPostController,logoutController} = require('../Controller/UserController')
const {LOgInAndSingUpAthentication} = require('../Authenticate/userAuthenticate')
router.get('/',LOgInAndSingUpAthentication,loginGetController)
router.post('/',LOgInAndSingUpAthentication,loginPostController)
router.get('/logout',logoutController)
module.exports = router