const router = require('express').Router()
const {classRoutineGetController,classRoutinePostController} = require('../Controller/ClassRoutineController')
const {dashboardAthenticate} = require('../Authenticate/userAuthenticate')

router.get('/',dashboardAthenticate,classRoutineGetController)

router.post('/',dashboardAthenticate,classRoutinePostController)

module.exports = router

