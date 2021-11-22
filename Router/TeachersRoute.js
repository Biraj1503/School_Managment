const router = require('express').Router()
const {TeachersGetController,TeachersPostController,ShowTeacherslistPostController,ShowTeacherslistGetController} = require('../Controller/TeachersController')
const {dashboardAthenticate} = require('../Authenticate/userAuthenticate')
const upload=  require('../Midalware/ProfilepicuploadMedalware')
router.get('/', dashboardAthenticate,TeachersGetController)
router.post('/', dashboardAthenticate,upload.single('teachersprofilepics'),TeachersPostController)
router.get('/showteacherslist', ShowTeacherslistGetController)
router.post('/showteacherslist', ShowTeacherslistPostController)
module.exports = router