const router = require("express").Router()
const {SchoolRoutineGetController,SchoolRoutinePostController} = require('../Controller/SchoolRoutineController')
const {dashboardAthenticate} = require('../Authenticate/userAuthenticate')
router.get('/',dashboardAthenticate,SchoolRoutineGetController)
router.post('/',dashboardAthenticate,SchoolRoutinePostController)
module.exports = router