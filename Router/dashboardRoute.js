const router = require('express').Router()
const {schooltHomeController,studentsProfileGetController,studentsProfilePostController} = require('../Controller/StudentsController')
const {dashboardAthenticate} = require('../Authenticate/userAuthenticate')
const upload = require('../Midalware/ProfilepicuploadMedalware')
router.get('/',dashboardAthenticate,schooltHomeController)

router.get('/students/profile',dashboardAthenticate,studentsProfileGetController)

router.post('/students/profile',dashboardAthenticate,upload.single('profilepic'),studentsProfilePostController)

module.exports = router