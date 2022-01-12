const router = require("express").Router()
const {
	StudentsAdmissionGetController,
	StudentsAdmissionPostController,
	UserAddmissionformdownloadGetController,
	UserAddmissionformdownloadPostController
} = require('../Controller/AdmissionController')

const upload=  require('../Midalware/ProfilepicuploadMedalware')

router.get('/',StudentsAdmissionGetController)

router.post('/',upload.single('studentimage'),StudentsAdmissionPostController)


router.get('/userdownload',UserAddmissionformdownloadGetController)

router.post('/userdownload',UserAddmissionformdownloadPostController)
//router.post('/',StudentsAdmissionPostController)
module.exports = router