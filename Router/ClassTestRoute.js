const router = require("express").Router()
const {dashboardAthenticate} = require('../Authenticate/userAuthenticate')
const {
	ClassTestGetController,
	ClassTestPostController
}= require("../Controller/ClassTestController")

const {StudentsLogOutAuthenticate} = require('../Authenticate/StudentsAuthenticate')


router.get('/',dashboardAthenticate, ClassTestGetController)
router.post('/',dashboardAthenticate, ClassTestPostController)

module.exports = router