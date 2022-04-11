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
	ClassTestResultPostController,
	CreateAssigmentGetController,
	CreateAssigmentPostController,
	StudentsEntryGetController,
	StudentsEntryPostController,
	StudentsListGetController,
	StudentsListPostController,
	StudentsDeleteController,
	StudentsEditController,
	PublicestudentslistGetController,
	PublicestudentslistPostController,
	AttendanceGetController,
	AttendancePostController,
	AllAttendanceGetController,
	AllAttendancePostController,
	SinglestudentsAttendanceGetController,
	SinglestudentsAttendancePostController,
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

router.get('/assigment',StudentsLogOutAuthenticate, CreateAssigmentGetController)

router.post('/assigment',StudentsLogOutAuthenticate, CreateAssigmentPostController)

router.get('/studentsentry',dashboardAthenticate, StudentsEntryGetController)


router.post('/studentsentry',dashboardAthenticate, StudentsEntryPostController)


router.get('/studentslist',dashboardAthenticate, StudentsListGetController)


router.post('/studentslist',dashboardAthenticate, StudentsListPostController)

router.get('/attendance',dashboardAthenticate, AttendanceGetController)

router.post('/attendance',dashboardAthenticate, AttendancePostController)

router.get('/allstudentsattendance', AllAttendanceGetController)

router.post('/allstudentsattendance', AllAttendancePostController)

router.get('/singlestudentsattendance', SinglestudentsAttendanceGetController)

router.post('/singlestudentsattendance', SinglestudentsAttendancePostController)

router.get('/delete/:id',dashboardAthenticate, StudentsDeleteController)

router.put('/Edit/:id',dashboardAthenticate, StudentsEditController)

router.get('/publicestudentslist', PublicestudentslistGetController)

router.post('/publicestudentslist', PublicestudentslistPostController)


module.exports = router  