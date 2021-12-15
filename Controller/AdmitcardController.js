const Examfee = require('../Model/ExamfeeModel')
const User = require('../Model/UserModel')
module.exports = {
	AdmitCardGetController(req,res,next){
		User.find()
		.then(data=>{
			res.render('admit.ejs',{error:'',data})
		})
		.catch(err=>console.log(err))
	},

	AdmitCardPostController(req,res,next){		
		//let admit = await Examfee.find()
				/*let {classname,roll,examtrm,year,schoolname} = req.body
				admit.find(admit=>{
					if (admit.classname==classname && admit.roll==roll && admit.examtrm==examtrm && admit.year==year && admit.schoolname == schoolname) {
						console.log(admit)
						return res.render('downloadadmit.ejs',{admit})		
					}
				})*/
				let {classname,roll,examtrm,year,schoolname} = req.body
				Examfee.findOne({classname,roll,examtrm,year,schoolname},(err,admit)=>{
					if (err) {
						console.log(err)	
					}
					if (admit) {
						return res.render('downloadadmit.ejs',{admit})
					}
					User.find()
					.then(data=>{
						res.render('admit.ejs',{error:'Wrong Information',data})
					})
					.catch(err=>console.log(err))
				})

		}
}


