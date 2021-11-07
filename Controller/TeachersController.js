const cloudinary = require('../Cloudinaryconfig/Cloudinaryconfig')
const upload = require('../Midalware/ProfilepicuploadMedalware')
const Teachers = require('../Model/TeachersModel')
exports.TeachersGetController=(req,res,next)=>{
	res.render('teachers.ejs',{user:req.session.user})
}

exports.TeachersPostController= async (req,res,next)=>{
	try{
		let {name,address,subject,email,teachersprofilepics,description} = req.body
		let cloudinaryImage = cloudinary.uploader.upload(req.file.path)
		const teachers = new Teachers({
			name,
			address,
			subject,
			email,
			description,
			teachersprofilepics:cloudinaryImage.secure_url
		})

		await teachers.save()
		res.render('teachers.ejs',{user:req.session.user})
	}
	catch(err){
		cosole.log(err)
	}
}