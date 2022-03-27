const StudentsId = require('../Model/StudentsIdModel')
const bcrypt = require('bcryptjs')
const cloudinary = require('../Cloudinaryconfig/Cloudinaryconfig')
const {CreatestudentsIDValidation} = require('../Validation/Uservalidation')
const ClassTest = require('../Model/ClassTestModel')
const ClasstestResult = require('../Model/ClassTestResultModel')
const Assigment = require('../Model/AssigmentModel')
const StudentsEnty = require('../Model/StudentsEntyModel')
const User = require('../Model/UserModel')
module.exports = {
	StudentsIDGetCreateController(req,res,next){
		
		res.render("CreateStudentsAccount.ejs",{user:req.session.user,users:false,successfull:false,error:{}})
	},
	async StudentsIDPostCreateController(req,res,next){
		try{
				// req.body
				let {
				name,
				classname,
				roll,
				email,
				password,
				riligon,
				gender,
				phonenumber,
				address,
				confirmPassword
			}=req.body

			//Checked Password 

			let match = CreatestudentsIDValidation({password,confirmPassword})
			if(match.isValid){
				let {error} = match
				return res.render("CreateStudentsAccount.ejs",{user:req.session.user,users:false,successfull:false,error})
			}
			
			//Checked Email Classname 

			let user = await StudentsId.findOne({email,classname})

			if (user) {
				res.render("CreateStudentsAccount.ejs",{user:req.session.user,users:true,successfull:false,error:{}})
			}else{

				let cloudinaryImage = await cloudinary.uploader.upload(req.file.path)
				let hash =await bcrypt.hash(password,10)
				const studentsId = new StudentsId({
					name,
					classname,
					roll,
					email,
					password:hash,
					riligon,
					gender,
					phonenumber,
					address,
					photo:cloudinaryImage.secure_url,
					schoolname:req.session.user.schoolname
				})

				 await studentsId.save()

				res.render("CreateStudentsAccount.ejs",{user:req.session.user,users:false,successfull:true,error:{}})
			}
		}
		catch(err){
			console.log(err)
		}
		
	},

	StudentsGetLoginController(req,res,next){
		res.render('StudentsLoginPage.ejs',{usersemail:true,userspassword:true})
	},

	async StudentsPostLoginController(req,res,next){
		try{
			let {email,password} = req.body
			let users = await StudentsId.findOne({email})
			if (!users) {
				res.render('StudentsLoginPage.ejs',{usersemail:false,userspassword:true})
			}
				let compare = await bcrypt.compare(password,users.password)
				console.log(compare)

				if (!compare) {
					res.render('StudentsLoginPage.ejs',{usersemail:true,userspassword:false})
				}

				req.session.StudentsIsLogin = true
				req.session.users = users
				req.session.save(err=>{
					if (err) {
						return next(err)
					}
					res.redirect("/studentsaccount/studentsaccountpage")
				})		
			

		}catch(err){
			console.log(err)
		}

	},

	StudentsAccountGetController(req,res,net){
		res.render('StudentsPersonalPage.ejs',{users:req.session.users})
	},


	GetFindClassTestQusetions(req,res,next){
		res.render("findclasstestquestionspage.ejs",{users:req.session.users,questions:[],error:false,ans:false, errors:''})
	},

	async PostFindClassTestQusetions(req,res,next){
		try{
			let {
				classname,
				examname,
				subject,
				date
			}=req.body

			const event = new Date(date)
			const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
			let currentdate = event.toLocaleDateString(options)


			let findclasstestquestions = await ClasstestResult.findOne({classname,roll:req.session.users.roll,subject,examname,date:currentdate,schoolname:req.session.users.schoolname, year:req.session.users.year})

			//console.log(findclasstestquestions)

			if (findclasstestquestions) {
				return res.render("findclasstestquestionspage.ejs",{users:req.session.users,questions:[],error:false,ans:false, errors:'Your Exam Is Complete'})
			}

			ClassTest.findOne({classname,examname,subject,date:currentdate,schoolname:req.session.users.schoolname},(err,questions)=>{
				if (err){
					console.log(err)
				}

				if(questions) {
					return res.render("findclasstestquestionspage.ejs",{users:req.session.users, questions,error:false,ans:true, errors:''})

				}else{
					return res.render("findclasstestquestionspage.ejs",{users:req.session.users,questions:[],error:true,ans:false, errors:''})
				}
				
			})
			
		}catch(err){
			console.log(err)
		}
	},

	async AnsClasstestPostController(req,res,net){
		try{

			/*let {
			options1,
			options2,
			options3,
			options4,
			qusetionsname
		}=req.body

		if (options1.length > 1) {
			let obj = {
				opt:options1
			}
			console.log(obj)
		}else{
			console.log(options1)
		}*/

		console.log(req.body)
		
		//res.render("findclasstestquestionspage.ejs",{users:req.session.users,questions:[],error:false, ans:false})

		let {
			examname,
			subject,
			date,
			classname,
			options1,
			qusetionsnotwooption,
			qusetionsnothreeoption,
			qusetionsnofouroption,
			qusetionsnofiveoption,
			qusetionsnosixoption,
			qusetionsnosevenoption,
			qusetionsnoeightnoption,
			qusetionsnoninenoption,
			qusetionsnotennoption,
			qusetionsnoelevennoption,
			qusetionsno12thnoption,
			qusetionsno13thnoption,
			qusetionsno14thnoption,
			qusetionsno15thnoption,
			qusetionsno16thnoption,
			qusetionsno17thnoption,
			qusetionsno18thoption,
			qusetionsno19thnoption,
			qusetionsno20thnoption
		} = req.body

		let classTest = await ClassTest.findOne({classname,examname,subject,date})
		//console.log(classTest.qusetionsnameone)

		let classtextresult = new ClasstestResult({
			name:req.session.users.name,
			roll:req.session.users.roll,
			year:req.session.users.year,
			classname,
			examname,
			subject,
			date,
			options1,
			questionsno1:classTest.qusetionsnameone,      
			questionsno2:classTest.qusetionsnametwo,
			questionsno3:classTest.qusetionsnamethree ,
			questionsno4:classTest.qusetionsnamefour ,
			questionsno5:classTest.qusetionsnamefive ,
			questionsno6:classTest.qusetionsnamesix ,
			questionsno7:classTest.qusetionsnameseven ,
			questionsno8:classTest.qusetionsnameeight ,
			questionsno9:classTest.qusetionsnamenine ,
			questionsno10:classTest.qusetionsnameten ,
			questionsno11:classTest.qusetionsnameeleven ,
			questionsno12:classTest.qusetionsname12th ,
			questionsno13:classTest.qusetionsname13th ,
			questionsno14:classTest.qusetionsname14th ,
			questionsno15:classTest.qusetionsname15th ,
			questionsno16:classTest.qusetionsname16th ,
			questionsno17:classTest.qusetionsname17th ,
			questionsno18:classTest.qusetionsname18th ,
			questionsno19:classTest.qusetionsname19th ,
			questionsno19:classTest.qusetionsname20th ,
			qusetionsnotwooption,
			qusetionsnothreeoption,
			qusetionsnofouroption,
			qusetionsnofiveoption,
			qusetionsnosixoption,
			qusetionsnosevenoption,
			qusetionsnoeightnoption,
			qusetionsnoninenoption,
			qusetionsnotennoption,
			qusetionsnoelevennoption,
			qusetionsno12thnoption,
			qusetionsno13thnoption,
			qusetionsno14thnoption,
			qusetionsno15thnoption,
			qusetionsno16thnoption,
			qusetionsno17thnoption,
			qusetionsno18thoption,
			qusetionsno19thnoption,
			qusetionsno20thnoption,
			correctans1:classTest.oneNOqusetionsAns,
			correctans2:classTest.ansqusetionsNOtwo,
			correctans3:classTest.ansqusetionsNOthree,
			correctans4:classTest.ansqusetionsNOfour,
			correctans5:classTest.ansqusetionsNOfive,
			correctans6:classTest.ansqusetionsNOsix,
			correctans7:classTest.ansqusetionsNOseven,
			correctans8:classTest.ansqusetionsNOeight,
			correctans9:classTest.ansqusetionsNOnine,
			correctans10:classTest.ansqusetionsNOten,
			correctans11:classTest.ansqusetionsNOeleven,
			correctans12:classTest.ansqusetionsNO12th,
			correctans13:classTest.ansqusetionsNO13th,
			correctans14:classTest.ansqusetionsNO14th,
			correctans15:classTest.ansqusetionsNO15th,
			correctans16:classTest.ansqusetionsNO16th,
			correctans17:classTest.ansqusetionsNO17th,
			correctans18:classTest.ansqusetionsNO18th,
			correctans19:classTest.ansqusetionsNO19th,
			correctans20:classTest.ansqusetionsNO20th
		})

		await classtextresult.save()

		res.redirect('/studentsaccount/findclasstestqu')

		}catch(err){
			console.log(err)
		}
	},


	ClassTestResultGetController(req,res,next){
		res.render("StudentsClassTestResult.ejs",{users:req.session.users,error:""})
	},

	ClassTestResultPostController(req,res,next){
		let {
			classname,
			roll,
			examname,
			date,
			subject
		} = req.body


		const event = new Date(date)
		const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		let currentdate = event.toLocaleDateString(options)

		ClasstestResult.findOne({classname,roll,subject,examname,date:currentdate,schoolname:req.session.users.schoolname, year:req.session.users.year},(err,result)=>{
			if (err) {
				console.log(err)
			}
			if (result) {
				return res.render("StudentsShowclasstestResult.ejs",{users:req.session.users,result})
			}

			res.render("StudentsClassTestResult.ejs",{users:req.session.users, error:'No Result...'})
			
		})

		
	},
	CreateAssigmentGetController(req,res,next){
		let data = {
			questions:[{}]
		}
		res.render("StudentsAssigmentQuestions.ejs",{users:req.session.users,data,nodata:''})
	},

	CreateAssigmentPostController(req,res,next){
		let {schoolname} = req.session.users
		let {
			classname,
			assigmentno,
			subject,
			startingdate,
		}=req.body


		const stdate = new Date(startingdate)
		const options = { weekday: 'long', year: 'numeric', day: 'numeric', month: 'long'};
		let strdate = stdate.toLocaleDateString(options)

		let data = {
				questions:[{}]
			}

		Assigment.findOne({classname,assigmentno,subject,startingdate:strdate,schoolname},(err,data)=>{
			if (err) console.log(err)

			if (data) {
				return res.render("StudentsAssigmentQuestions.ejs",{users:req.session.users,data,nodata:''})
			}

			res.render("StudentsAssigmentQuestions.ejs",{users:req.session.users,data, nodata:'No Result...'})	
		})
		
	},

	StudentsEntryGetController(req,res,next){
		res.render("StudentsEntry.ejs",{user:req.session.user,success:false})
	},

	StudentsEntryPostController(req,res,next){
		let {schoolname} = req.session.user
		let {classname,year,name,roll,phone,address}=req.body

		const studentsEnty = new StudentsEnty({
			schoolname,
			classname,
			year,
			name,
			roll,
			phone,
			address
		})
		studentsEnty.save()
		.then(()=>{
			return res.render("StudentsEntry.ejs",{user:req.session.user,success:true})
		})
		.catch(err=>console.log(err))
		
	},

	StudentsListGetController(req,res,next){
		res.render("StudentsList.ejs",{user:req.session.user,list:[{}],data:''})
	},

	StudentsListPostController(req,res,next){
		let {schoolname} = req.session.user
		let {classname,year} = req.body 

		StudentsEnty.find({schoolname,classname,year},(err,list)=>{
			if (err) console.log(errr)

			if (list) {
				 return res.render("StudentsList.ejs",{user:req.session.user,list,data:true})
			}

			console.log('No Students...')
		}).sort({roll:1})
		
	},

	StudentsDeleteController(req,res,next){

		let {_id} = req.params

		StudentsEnty.findOneAndDelete(_id)
		.then(()=>{
			res.render("StudentsList.ejs",{user:req.session.user,list:[{}],data:false})	
		})
		.catch(err=>console.log(err))
	},

	StudentsEditController(req,res,next){
		res.render("StudentsList.ejs",{user:req.session.user,list:[{}],data:true})
	},

	// Publice Search Students List
	PublicestudentslistGetController(req,res,next){
		User.find()
		.then(schoolname=>{
			res.render("publicestudentslist.ejs",{schoolname,error:'',list:[{}]})
		})

		.catch(err=>console.log(err))
	},

	PublicestudentslistPostController(req,res,next){
		let {classname,year,schoolname} = req.body 

		StudentsEnty.find({classname,year,schoolname},(err,list)=>{
			if (err) console.log(errr)

			if (list) {
				 return res.render("publicestudentslist.ejs",{list,error:'',schoolname:[{}]})
			}else{
				return res.render("publicestudentslist.ejs",{list:[{}],error:true,schoolname:[{}]})
			}

		}).sort({roll:1})
	},

	StudentsGetLogOutController(req,res,next){
		if (req.session) {
			req.session.destroy(err=>{
				if (err) return next(err)
				res.redirect("/studentsaccount/login")
			})
		}
	}
}

