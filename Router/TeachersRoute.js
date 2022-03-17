const router = require('express').Router()
const {
	TeachersGetController,
	TeachersPostController,
	ShowTeacherslistPostController,
	ShowTeacherslistGetController,
	CreateTeachersAccountGetController,
	CreateTeachersAccountPostController,
	LoginAccountGetController,
	LoginAccountPostController,
	TeachersProfileGetController,
	LogoutGetController,
	ClassTestGetController,
	ClassTestPostController,
	ClassTestResultGetController,
	ClassTestResultPostController,
	GetFindClassTestQusetions,
	PostFindClassTestQusetions,
	CreateAssigmentGetController,
	CreateAssigmentPostController,
	ShowAssigmentGetController,
	ShowAssigmentPostController
} = require('../Controller/TeachersController')
const {dashboardAthenticate} = require('../Authenticate/userAuthenticate')

const {TeachersLoginAuthenticate,TeachersprofilepageAuth} = require('../Authenticate/TeachersAuthenticate')

const upload=  require('../Midalware/ProfilepicuploadMedalware')
router.get('/', dashboardAthenticate,TeachersGetController)
router.post('/', dashboardAthenticate,upload.single('teachersprofilepics'),TeachersPostController)
router.get('/showteacherslist', ShowTeacherslistGetController)
router.post('/showteacherslist', ShowTeacherslistPostController)

router.get('/account',dashboardAthenticate, CreateTeachersAccountGetController)
router.post('/account', dashboardAthenticate,CreateTeachersAccountPostController)

router.get('/teachersLogins',TeachersLoginAuthenticate, LoginAccountGetController)
router.post('/teachersLogins',TeachersLoginAuthenticate, LoginAccountPostController)
router.get('/teachersprofile',TeachersprofilepageAuth,TeachersProfileGetController)


router.get('/teachersclasstest',TeachersprofilepageAuth, ClassTestGetController)
router.post('/teachersclasstest',TeachersprofilepageAuth, ClassTestPostController)

router.get('/findclasstestresult',TeachersprofilepageAuth, ClassTestResultGetController)

router.post('/findclasstestresult',TeachersprofilepageAuth, ClassTestResultPostController)

router.get('/findclasstestqu',TeachersprofilepageAuth, GetFindClassTestQusetions)

router.post('/findclasstestqu',TeachersprofilepageAuth, PostFindClassTestQusetions)

router.get('/assigment',TeachersprofilepageAuth, CreateAssigmentGetController)

router.post('/assigment',TeachersprofilepageAuth, CreateAssigmentPostController)

router.get('/showassigment',TeachersprofilepageAuth, ShowAssigmentGetController)

router.post('/showassigment',TeachersprofilepageAuth, ShowAssigmentPostController)

router.get('/teachersLogout', LogoutGetController)

module.exports = router