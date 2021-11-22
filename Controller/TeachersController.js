const cloudinary = require('../Cloudinaryconfig/Cloudinaryconfig')
const upload = require('../Midalware/ProfilepicuploadMedalware')
const Teachers = require('../Model/TeachersModel')
const User = require('../Model/UserModel')
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