const router = require('express').Router()
const {singupPostController,singupGetController,loginGetController} = require('../Controller/UserController')
const {LOgInAndSingUpAthentication} = require('../Authenticate/userAuthenticate')
router.get('/',LOgInAndSingUpAthentication,singupGetController)
router.post('/',LOgInAndSingUpAthentication,singupPostController)

/*router.get('/',LOgInAndSingUpAthentication,loginGetController)
router.post('/',LOgInAndSingUpAthentication,loginGetController)*/
module.exports = router
