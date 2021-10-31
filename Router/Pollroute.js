const router = require('express').Router()
const {PollgetController,PollpostController} = require('../Controller/Controller')
const {pollcreateAthenticate} = require('../Authenticate/userAuthenticate')
router.get('/',pollcreateAthenticate,PollgetController,)
router.post('/',pollcreateAthenticate,PollpostController)

module.exports=router