const router = require('express').Router()
const {AdmitCardGetController,AdmitCardPostController} = require('../Controller/AdmitcardController')
router.get('/',AdmitCardGetController)
//router.get('/admitdownload', DownloadAdmitGetController)
router.post('/',AdmitCardPostController)

module.exports = router