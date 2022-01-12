const router = require('express').Router()
const {StudentsIDGetCreateController,StudentsIDPostCreateController} = require('../Controller/StudentsIdController')
const {dashboardAthenticate} = require('../Authenticate/userAuthenticate')
router.get('/',dashboardAthenticate,StudentsIDGetCreateController)

router.post('/',dashboardAthenticate,StudentsIDPostCreateController)

module.exports = router