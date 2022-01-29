var nodemailer = require('nodemailer');
const cloudinary = require('../Cloudinaryconfig/Cloudinaryconfig')
const AddmissionModel = require('../Model/AdmissionModel')
const User = require('../Model/UserModel')
//require("dotenv").config()
module.exports = {
	StudentsAdmissionGetController(req,res,next){
		User.find()
		.then(schoolname=>{
			res.render('studentsadmissionpage.ejs',{message:'',schoolname})
		})
		.catch(err=>{
			console.log(err)
		})
	},
	async StudentsAdmissionPostController(req,res,next){
		try{
			let {
				firstname,
				lastname,
				email,
				phone,
				city,
				district,
				nidno,
				presentaddress,
				prevschoolname,
				admissionschool,
				classname,
				fathername,
				Parentsnid,
				riligion,
				mothername
			}=req.body

			let cloudinaryImage = await cloudinary.uploader.upload(req.file.path)

			let addmissionmodel = new AddmissionModel({
				firstname,
				lastname,
				email,
				phone,
				city,
				district,
				nidno,
				presentaddress,
				prevschoolname,
				admissionschool,
				classname,
				studentimage:cloudinaryImage.secure_url,
				fathername,
				Parentsnid,
				riligion,
				mothername
			})

			await addmissionmodel.save()

			res.render('studentsadmissionpage.ejs',{message:"Submit Successful",schoolname:[]})
		}
		catch(err){
			console.log(err)
		}

		/*var transporter = nodemailer.createTransport({
		  service: 'gmail',
		  auth: {
		    user:"schoolmanagment1503@gmail.com",
		    pass:"Birajxyz1234567819@gmail.com"
		  }
		});

		var mailOptions = {
		  from: process.env.USER_EMAI,
		  to: 'toshebamail@gmail.com',
		  subject: 'Sending Email using Node.js',
		  text: 'Hell Biraj How are You!'
		};

		transporter.sendMail(mailOptions, function(error, info){
		  if (error) {
		    console.log(error);
		  } else {
		    console.log('Email sent: ' + info.response);
		  }
		});

		//res.render('studentsadmissionpage.ejs')
		console.log(process.env.USER_EMAI)*/
	},

	UserAddmissionformdownloadGetController(req,res,next){
		User.find()
		.then(schoolname=>{
			res.render("useraddmissionformdownload.ejs",{schoolname,addmissionform:{},error:'', AddmissionsForm:false,schoolinfo:{}})
		})
		.catch(err=>console.log(err))
	},

	UserAddmissionformdownloadPostController(req,res,next){
		let {phone,admissionschool} = req.body	
		AddmissionModel.findOne({phone,admissionschool},(err,addmissionform)=>{
			
			if (err) {
				console.log(err)
			}

			if (addmissionform) {
					User.findOne({schoolname:admissionschool})
					.then(schoolinfo=>{
						res.render("useraddmissionformdownload.ejs",{schoolname:[],addmissionform,error:'', AddmissionsForm:true,schoolinfo})
						//console.log(schoolinfo)
					})
					.catch(err=>console.log(err))
				//return res.render("useraddmissionformdownload.ejs",{schoolname:[],addmissionform,error:'', AddmissionsForm:true,schoolinfo})
			}else if (!addmissionform) {
				return res.render("useraddmissionformdownload.ejs",{schoolname:[],addmissionform:{},error:"Don't Match Phone Number And School Name...", AddmissionsForm:false,schoolinfo:{}})
			}

			//return res.render("useraddmissionformdownload.ejs",{schoolname:[],addmissionform:{},error:"Don't Match Phone Number And School Name...", AddmissionsForm:false,schoolinfo:{}})

		})
	}
}