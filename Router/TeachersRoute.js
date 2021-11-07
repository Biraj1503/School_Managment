const router = require('express').Router()
const {TeachersGetController,TeachersPostController} = require('../Controller/TeachersController')
const {dashboardAthenticate} = require('../Authenticate/userAuthenticate')
const upload=  require('../Midalware/ProfilepicuploadMedalware')
router.get('/', dashboardAthenticate,TeachersGetController)
router.post('/', dashboardAthenticate,upload.single('profilepic'),TeachersPostController)

module.exports = router