const cloudinary = require('../Cloudinaryconfig/Cloudinaryconfig')
const upload = require('../Midalware/ProfilepicuploadMedalware')
const Teachers = require('../Model/TeachersModel')
const User = require('../Model/UserModel')
const {CreatestudentsIDValidation} = require('../Validation/Uservalidation')
const TeachersAccount = require('../Model/CreateTeachersAccountModel')
const bcrypt = require('bcryptjs')
const ClassTest = require('../Model/ClassTestModel')
const ClasstestResult = require('../Model/ClassTestResultModel')
exports.TeachersGetController=(req,res,next)=>{
	res.render('teachers.ejs',{user:req.session.user})
}

exports.TeachersPostController= async (req,res,next)=>{
	try{
		let {name,address,subject,email,teachersprofilepics,description,schoolname} = req.body
		let cloudinaryImage = await cloudinary.uploader.upload(req.file.path)
		const teachers = new Teachers({
			name,
			address,
			subject,
			email,
			description,
			schoolname,
			User:req.session.user._id,
			teachersprofilepics:cloudinaryImage.secure_url
		})

		let techID = await teachers.save()
		await User.updateOne({
			_id:req.session.user._id
		},
		{
			$push:{
				Teachers:techID._id
			}
	})
		res.render('teachers.ejs',{user:req.session.user})
	}
	catch(err){
		console.log(err)
	}
}

exports.ShowTeacherslistGetController=(req,res,next)=>{
	res.render('AllTeachersList.ejs',{user:req.session.user,Teachers:""})
}

exports.ShowTeacherslistPostController=async(req,res,next)=>{
	console.log('Include')
	try{
		let {schoolname} = req.body

		/*Aivaba o Khub Sohoja kora jato
		 user.find({schoolname},(err,result)=>{}).populate('Teachers')*/
		 
		let teachersSchoolname = await Teachers.findOne({schoolname})
		let userSchoolname = await User.findOne({schoolname})
		if(teachersSchoolname.schoolname == userSchoolname.schoolname){
			let allteachers = await User.findOne({schoolname}).populate('Teachers')
			//console.log(allteachers)
			let {Teachers} = allteachers
			//console.log(Teachers)
			//console.log(teachersSchoolname.schoolname == userSchoolname.schoolname)
			return res.render('AllTeachersList.ejs',{user:req.session.user,Teachers})
		}
		console.log("Wrong")
	}catch(err){
		console.log(err)
	}
	
}

exports.CreateTeachersAccountGetController=(req,res,next)=>{
	res.render("CreateTeachersAccountPage.ejs",{user:req.session.user,users:false,successfull:false,error:{}})
}

exports.CreateTeachersAccountPostController=async (req,res,next)=>{

			try{
				// req.body
				let {
				name,
				subject,
				idno,
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
				return res.render("CreateTeachersAccountPage.ejs",{user:req.session.user,users:false,successfull:false,error})
			}
			
			//Checked Email Classname 

			let user = await TeachersAccount.findOne({email,idno})

			if (user) {
				res.render("CreateTeachersAccountPage.ejs",{user:req.session.user,users:true,successfull:false,error:{}})
			}else{
				let hash =await bcrypt.hash(password,10)
				const teachersAccount = new TeachersAccount({
					name,
					subject,
					idno,
					email,
					password:hash,
					riligon,
					gender,
					phonenumber,
					address,
					schoolname:req.session.user.schoolname
				})

				 await teachersAccount.save()

				res.render("CreateTeachersAccountPage.ejs",{user:req.session.user,users:false,successfull:true,error:{}})
			}
		}
		catch(err){
			console.log(err)
		}
		
	}

exports.LoginAccountGetController=(req,res,next)=>{
	res.render("TeachersLoginPage.ejs",{usersemail:true,userspassword:true})
}

exports.LoginAccountPostController=async (req,res,next)=>{
	try{
			let {email,password} = req.body
			let teachers = await TeachersAccount.findOne({email})
			if (!teachers) {
				res.render('TeachersLoginPage.ejs',{usersemail:false,userspassword:true})
			}
				let compare = await bcrypt.compare(password,teachers.password)
				console.log(compare)

				if (!compare) {
					res.render('TeachersLoginPage.ejs',{usersemail:true,userspassword:false})
				}

				req.session.TeachersIsLogin = true
				req.session.teachers = teachers
				req.session.save(err=>{
					if (err) {
						return next(err)
					}
					res.redirect("/teachers/teachersprofile")
				})		
			

		}catch(err){
			console.log(err)
		}

	}

	exports.TeachersProfileGetController=async(req,res,next)=>{
		res.render('TeachersProfile.ejs',{teachers:req.session.teachers})
	}


	exports.ClassTestGetController=(req,res,next)=>{
		res.render("TeachersClassTestExamPage.ejs",{teachers:req.session.teachers})
	}

	exports.ClassTestPostController=(req,res,next)=>{
		console.log(req.body)

		let {
			classname,
			examname,
			subject,
			date,
			time,
			qusetionsnameone,
			qusetionsnooneoptionone,
			qusetionsnooneoptiontwo,
			qusetionsnooneoptionthree,
			qusetionsnooneoptionfour,
			oneNOqusetionsAns,
			qusetionsnametwo,
			qusetionsnotwooptionone,
			qusetionsnotwooptionthree,
			qusetionsnotwooptionfour,
			ansqusetionsNOtwo,
			qusetionsnamethree,
			qusetionsnothreeoptionone,
			qusetionsnothreeoptiontwo,
			qusetionsnothreeoptionthree,
			qusetionsnothreeoptionfour,
			ansqusetionsNOthree,
			qusetionsnamefour,
			qusetionsnofouroptionone,
			qusetionsnofouroptiontwo,
			qusetionsnofouroptionthree,
			qusetionsnofouroptionfour,
			ansqusetionsNOfour,
			qusetionsnamefive,
			qusetionsnofiveoptionone,
			qusetionsnofiveoptiontwo,
			qusetionsnofiveoptionthree,
			qusetionsnofiveoptionfour,
			ansqusetionsNOfive,
			qusetionsnamesix,
			qusetionsnosixoptionone,
			qusetionsnosixoptiontwo,
			qusetionsnosixoptionthree,
			qusetionsnosixoptionfour,
			ansqusetionsNOsix,
			qusetionsnameseven,
			qusetionsnosevenoptionone,
			qusetionsnosevenoptiontwo,
			qusetionsnosevenoptionthree,
			qusetionsnosevenoptionfour,
			ansqusetionsNOseven,
			qusetionsnameeight,
			qusetionsnoeightoptionone,
			qusetionsnoeightoptiontwo,
			qusetionsnoeightoptionthree,
			qusetionsnoeightoptionfour,
			ansqusetionsNOeight,
			qusetionsnamenine,
			qusetionsno12thoptiontwo,
			qusetionsno12thoptionthree,
			qusetionsno12thoptionfour,
			ansqusetionsNO12th,
			qusetionsname13th,
			qusetionsno13thoptionone,
			qusetionsno13thoptiontwo,
			qusetionsno13thoptionthree,
			qusetionsno13thoptionfour,
			ansqusetionsNO13th,
			qusetionsname14th,
			qusetionsno14thoptionone,
			qusetionsno14thoptiontwo,
			qusetionsno14thoptionthree,
			qusetionsno14thoptionfour,
			ansqusetionsNO14th,
			qusetionsname15th,
			qusetionsno15thoptionone,
			qusetionsno15thoptiontwo,
			qusetionsno15thoptionthree,
			qusetionsno15thoptionfour,
			ansqusetionsNO15th,
			qusetionsname16th,
			qusetionsno16thoptionone,
			qusetionsno16thoptiontwo,
			qusetionsno16thoptionthree,
			qusetionsno16thoptionfour,
			ansqusetionsNO16th,
			qusetionsname17th,
			qusetionsno17thoptionone,
			qusetionsno17thoptiontwo,
			qusetionsno17thoptionthree,
			qusetionsno17thoptionfour,
			ansqusetionsNO17th,
			qusetionsname18th,
			qusetionsno18thoptionone,
			qusetionsno18thoptiontwo,
			qusetionsno18thoptionthree,
			qusetionsno18thoptionfour,
			ansqusetionsNO18th,
			qusetionsname19th,
			qusetionsno19thoptionone,
			qusetionsno19thoptiontwo,
			qusetionsno19thoptionthree,
			qusetionsno19thoptionfour,
			ansqusetionsNO19th,
			qusetionsname20th,
			qusetionsno20thoptionone,
			qusetionsno20thoptiontwo,
			qusetionsno20thoptionthree,
			qusetionsno20thoptionfour,
			ansqusetionsNO20th

		}=req.body
		
		/*let {
			classname,
			examname,
			subject,
			date,
			time,
			qusetionsname,
			option1,
			option2,
			option3,
			option4,
			qusetionsans
		}=req.body*/

		let d = new Date()
		let year = d.getFullYear()

		const event = new Date(date)
		const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		let currentdate = event.toLocaleDateString(options)

		const classtest = new ClassTest({
			classname,
			examname,
			subject,
			date:currentdate,
			time,
			year,
			schoolname:req.session.user.schoolname,
			qusetionsnameone,
			qusetionsnooneoptionone,
			qusetionsnooneoptiontwo,
			qusetionsnooneoptionthree,
			qusetionsnooneoptionfour,
			oneNOqusetionsAns,
			qusetionsnametwo,
			qusetionsnotwooptionone,
			qusetionsnotwooptionthree,
			qusetionsnotwooptionfour,
			ansqusetionsNOtwo,
			qusetionsnamethree,
			qusetionsnothreeoptionone,
			qusetionsnothreeoptiontwo,
			qusetionsnothreeoptionthree,
			qusetionsnothreeoptionfour,
			ansqusetionsNOthree,
			qusetionsnamefour,
			qusetionsnofouroptionone,
			qusetionsnofouroptiontwo,
			qusetionsnofouroptionthree,
			qusetionsnofouroptionfour,
			ansqusetionsNOfour,
			qusetionsnamefive,
			qusetionsnofiveoptionone,
			qusetionsnofiveoptiontwo,
			qusetionsnofiveoptionthree,
			qusetionsnofiveoptionfour,
			ansqusetionsNOfive,
			qusetionsnamesix,
			qusetionsnosixoptionone,
			qusetionsnosixoptiontwo,
			qusetionsnosixoptionthree,
			qusetionsnosixoptionfour,
			ansqusetionsNOsix,
			qusetionsnameseven,
			qusetionsnosevenoptionone,
			qusetionsnosevenoptiontwo,
			qusetionsnosevenoptionthree,
			qusetionsnosevenoptionfour,
			ansqusetionsNOseven,
			qusetionsnameeight,
			qusetionsnoeightoptionone,
			qusetionsnoeightoptiontwo,
			qusetionsnoeightoptionthree,
			qusetionsnoeightoptionfour,
			ansqusetionsNOeight,
			qusetionsnamenine,
			qusetionsno12thoptiontwo,
			qusetionsno12thoptionthree,
			qusetionsno12thoptionfour,
			ansqusetionsNO12th,
			qusetionsname13th,
			qusetionsno13thoptionone,
			qusetionsno13thoptiontwo,
			qusetionsno13thoptionthree,
			qusetionsno13thoptionfour,
			ansqusetionsNO13th,
			qusetionsname14th,
			qusetionsno14thoptionone,
			qusetionsno14thoptiontwo,
			qusetionsno14thoptionthree,
			qusetionsno14thoptionfour,
			ansqusetionsNO14th,
			qusetionsname15th,
			qusetionsno15thoptionone,
			qusetionsno15thoptiontwo,
			qusetionsno15thoptionthree,
			qusetionsno15thoptionfour,
			ansqusetionsNO15th,
			qusetionsname16th,
			qusetionsno16thoptionone,
			qusetionsno16thoptiontwo,
			qusetionsno16thoptionthree,
			qusetionsno16thoptionfour,
			ansqusetionsNO16th,
			qusetionsname17th,
			qusetionsno17thoptionone,
			qusetionsno17thoptiontwo,
			qusetionsno17thoptionthree,
			qusetionsno17thoptionfour,
			ansqusetionsNO17th,
			qusetionsname18th,
			qusetionsno18thoptionone,
			qusetionsno18thoptiontwo,
			qusetionsno18thoptionthree,
			qusetionsno18thoptionfour,
			ansqusetionsNO18th,
			qusetionsname19th,
			qusetionsno19thoptionone,
			qusetionsno19thoptiontwo,
			qusetionsno19thoptionthree,
			qusetionsno19thoptionfour,
			ansqusetionsNO19th,
			qusetionsname20th,
			qusetionsno20thoptionone,
			qusetionsno20thoptiontwo,
			qusetionsno20thoptionthree,
			qusetionsno20thoptionfour,
			ansqusetionsNO20th
		})

		classtest.save()
		res.render("ClassTestExamPage.ejs",{teachers:req.session.teachers})
	}
	exports.ClassTestResultGetController=async(req,res,next)=>{
		res.render("TeachersFindStudentsClassTest.ejs",{teachers:req.session.teachers,error:"",result:{},find:false})
	}

	exports.ClassTestResultPostController=(req,res,next)=>{
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

		ClasstestResult.findOne({classname,roll,subject,examname,date:currentdate,schoolname:req.session.teachers.schoolname,error:""},(err,result)=>{
			if (err) {
				console.log(err)
			}
			if (result) {
				return res.render("Showstudentsresultforteachers.ejs",{teachers:req.session.teachers,result})
			}

			res.render("TeachersFindStudentsClassTest.ejs",{teachers:req.session.teachers, error:'No Result...',result:{},find:false})
			
		})

		
	}		

	exports.LogoutGetController=(req,res,next)=>{
		if (req.session) {
			req.session.destroy(err=>{
				if (err) return next(err)
				res.redirect("/teachers/teachersLogins")
			})
		}
	}

	
