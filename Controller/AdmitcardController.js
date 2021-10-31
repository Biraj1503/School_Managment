const Examfee = require('../Model/ExamfeeModel')

module.exports = {
	AdmitCardGetController(req,res,next){
		res.render('admit.ejs',{error:''})
	},

	async AdmitCardPostController(req,res,next){		
		let admit = await Examfee.find()
			try{
				let {classname,roll,examtrm,year} = req.body
				admit.find(admit=>{
					if (admit.classname==classname && admit.roll==roll && admit.examtrm==examtrm && admit.year==year) {
						console.log(admit)
						return res.render('downloadadmit.ejs',{admit})		
					}
				})

				return res.render('admit.ejs',{error:'Wrong information'})	
			}
			catch(err){
				console.log(err)
			}

		}

}


