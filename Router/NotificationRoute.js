const router = require('express').Router()
const {NoticeGetController,NoticePostController,allnoticesGetController,editNotices} = require('../Controller/NotificationController')
const {pollcreateAthenticate} = require('../Authenticate/userAuthenticate')
router.get('/',pollcreateAthenticate, NoticeGetController)
router.get('/allnotice',allnoticesGetController)
router.post('/:id',pollcreateAthenticate,editNotices)
router.post('/',pollcreateAthenticate, NoticePostController)
module.exports = router