const router = require("express").Router()
const {SchoolRoutineGetController,SchoolRoutinePostController,AllUserSerchRoutineGetController,AllUserSerchRoutinePostController} = require('../Controller/SchoolRoutineController')
const {dashboardAthenticate} = require('../Authenticate/userAuthenticate')
router.get('/',dashboardAthenticate,SchoolRoutineGetController)
router.post('/',dashboardAthenticate,SchoolRoutinePostController)

router.get('/showroutine',AllUserSerchRoutineGetController)
router.post('/showroutine',AllUserSerchRoutinePostController)
module.exports = router