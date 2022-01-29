const router = require('express').Router()
const {
	StudentsIDGetCreateController,
	StudentsIDPostCreateController,
	StudentsGetLoginController,
	StudentsPostLoginController,
	StudentsGetLogOutController,
	StudentsAccountGetController,
	GetFindClassTestQusetions,
	PostFindClassTestQusetions,
	AnsClasstestPostController,
	ClassTestResultGetController,
	ClassTestResultPostController
} = require('../Controller/StudentsIdController')

const {StudentsLoginAuthenticate,StudentsLogOutAuthenticate} = require('../Authenticate/StudentsAuthenticate')

const {dashboardAthenticate} = require('../Authenticate/userAuthenticate')

const upload=  require('../Midalware/ProfilepicuploadMedalware')

router.get('/',dashboardAthenticate,StudentsIDGetCreateController)

router.post('/',dashboardAthenticate,upload.single('photo'),StudentsIDPostCreateController)

router.get('/login',StudentsLoginAuthenticate,StudentsGetLoginController)
router.post('/login', StudentsLoginAuthenticate,StudentsPostLoginController)

router.get('/logOut',StudentsLogOutAuthenticate,StudentsGetLogOutController)

router.get('/studentsaccountpage', StudentsLogOutAuthenticate,StudentsAccountGetController)

router.get('/findclasstestqu',StudentsLogOutAuthenticate, GetFindClassTestQusetions)

router.post('/findclasstestqu',StudentsLogOutAuthenticate, PostFindClassTestQusetions)

router.post('/studentsquestionsans',StudentsLogOutAuthenticate, AnsClasstestPostController)

router.get('/findclasstestresult',StudentsLogOutAuthenticate, ClassTestResultGetController)

router.post('/findclasstestresult',StudentsLogOutAuthenticate, ClassTestResultPostController)

module.exports = router