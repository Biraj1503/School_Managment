const router = require('express').Router()
const {TeachersGetController,TeachersPostController} = require('../Controller/TeachersController')
const {dashboardAthenticate} = require('../Authenticate/userAuthenticate')
router.get('/', dashboardAthenticate,TeachersGetController)
router.post('/', dashboardAthenticate, TeachersPostController)

module.exports = router