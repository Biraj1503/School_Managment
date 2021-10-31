const router = require('express').Router()
const {StudentsGetResult,StudentsPostResult,SearchResult,studentgetProfile,AdminstudentGetResultEditDElete,AdminstudentPostResultEditDElete,editResult,deleteResult} = require("../Controller/StudentsExamResultController")
const {dashboardAthenticate} = require('../Authenticate/userAuthenticate')
router.get('/',dashboardAthenticate,StudentsGetResult)
router.post('/',dashboardAthenticate,StudentsPostResult)
router.get('/searchresult',(req,res,next)=>{
	res.render('PublishResult.ejs',{user:{},st:{},preview:false,error:''})
})

router.post('/searchresult',SearchResult)
router.get('/adminresult',dashboardAthenticate,AdminstudentGetResultEditDElete)
router.post('/adminresult',dashboardAthenticate,AdminstudentPostResultEditDElete)
router.post('/edit/:id',dashboardAthenticate,editResult)
router.get('/delete/:id',dashboardAthenticate,deleteResult)
router.get('/:id',studentgetProfile)
//router.get()
module.exports = router