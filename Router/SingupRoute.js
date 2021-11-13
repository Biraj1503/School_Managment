const router = require('express').Router()
const {singupPostController,singupGetController,loginGetController} = require('../Controller/UserController')
const {LOgInAndSingUpAthentication} = require('../Authenticate/userAuthenticate')
const upload = require('../Midalware/ProfilepicuploadMedalware')
router.get('/',LOgInAndSingUpAthentication,singupGetController)
router.post('/',LOgInAndSingUpAthentication,upload.single('schoollogo'),singupPostController)

module.exports = router
