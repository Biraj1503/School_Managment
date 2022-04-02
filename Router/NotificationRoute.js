const router = require('express').Router()
const {NoticeGetController,NoticePostController,allnoticesGetController,editNotices,allnoticesPostController} = require('../Controller/NotificationController')
const {pollcreateAthenticate} = require('../Authenticate/userAuthenticate')
router.get('/',pollcreateAthenticate, NoticeGetController)
router.get('/allnotice',allnoticesGetController)
router.post('/allnotice',allnoticesPostController)
router.post('/:id',pollcreateAthenticate,editNotices)
router.post('/',pollcreateAthenticate, NoticePostController)
module.exports = router