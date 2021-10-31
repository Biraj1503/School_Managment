const router = require('express').Router()
const {AllUserGetController,AllUserPostController} = require('../Controller/AllstudentsController')
const {dashboardAthenticate} = require('../Authenticate/userAuthenticate')
router.get('/',AllUserGetController)

router.post('/',AllUserPostController)

module.exports = router