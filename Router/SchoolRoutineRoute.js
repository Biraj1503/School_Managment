const router = require("express").Router()
const {
		SchoolRoutineGetController,
		SchoolRoutinePostController,
		AllUserSerchRoutineGetController,
		AllUserSerchRoutinePostController,
		SchoolRoutineModifyGetController,
		SchoolRoutineModifyPostController,
		SingleRoutineEditController,
		SingleRoutineDeletetController
} 
= require('../Controller/SchoolRoutineController')

const {dashboardAthenticate} = require('../Authenticate/userAuthenticate')

//Only Admin User
router.get('/',dashboardAthenticate,SchoolRoutineGetController)
router.post('/',dashboardAthenticate,SchoolRoutinePostController)

//All User
router.get('/showroutine',AllUserSerchRoutineGetController)
router.post('/showroutine',AllUserSerchRoutinePostController)

router.get('/modifyroutine',dashboardAthenticate,SchoolRoutineModifyGetController)
router.post('/modifyroutine',dashboardAthenticate,SchoolRoutineModifyPostController)

router.post('/edit/:id',dashboardAthenticate,SingleRoutineEditController)
router.delete('/delete/:id',dashboardAthenticate,SingleRoutineDeletetController)

module.exports = router