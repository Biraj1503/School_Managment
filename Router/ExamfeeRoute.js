const router = require('express').Router()
const {ExamfeeGetController,ExamfeePostController,AllFeesPostController,
AllFeesGetController} = require('../Controller/ExamfeeController')
const {dashboardAthenticate} = require('../Authenticate/userAuthenticate')
router.get('/',dashboardAthenticate,ExamfeeGetController)
router.post('/',dashboardAthenticate,ExamfeePostController)

router.get('/allfee',dashboardAthenticate,AllFeesGetController)
router.post('/allfee',dashboardAthenticate,AllFeesPostController)
module.exports= router