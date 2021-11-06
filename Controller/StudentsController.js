const User = require('../Model/UserModel')
const Students = require("../Model/StudentsMode/StudentsProfileModel")
const upload = require('../Midalware/ProfilepicuploadMedalware')
const cloudinary = require('../Cloudinaryconfig/Cloudinaryconfig')
exports.schooltHomeController=(req,res,next)=>{
	res.render('dashboard.ejs',{isLoggIn:req.session.isLoggIn,user:req.session.user})
}

exports.studentsProfileGetController= async (req,res,next)=>{
	res.render('StudentsProfile.ejs',{isLoggIn:{},user:req.session.user})
}

exports.studentsProfilePostController= async(req,res,next)=>{
	try{
		let profilepic = await cloudinary.uploader.upload(req.file.path)
		let {
			name,
			classname,
			roll,
			year,
			email,
			phonenumber,
			fathername,
			mothername,
			district,
			village,
			wordno,
			gender,
			birthday,
			subject,
			description,
			religion,
			profilepic
		} = req.body

		let student = new Students({
			user:req.session.user._id,
			name,
			classname,
			roll,
			email,
			year,
			phonenumber,
			fathername,
			mothername,
			district,
			village,
			wordno,
			gender,
			birthday,
			subject,
			description,
			religion,
			profilepic:profilepic.secure_url
		})

		await student.save()
		//console.log(students)
		res.render('StudentsProfile.ejs',{isLoggIn:{},user:req.session.user})
	}
	catch(err=>console.log(err))
}