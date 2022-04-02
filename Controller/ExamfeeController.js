const Examfee = require('../Model/ExamfeeModel')
const {ExamfeeValidation}= require('../Validation/ExamfeeValiadtion') 
const User = require('../Model/UserModel')
module.exports={
	ExamfeeGetController(req,res,next){
		res.render('Examfee.ejs', {user:req.session.user,error:{},duplicate:false})
		/*Examfee.find()
		.then(admit=>{
			res.render('Examfee.ejs', {user:req.session.user,admit})
		})
		.catch(err=>{
			console.log(err)
		})*/
		
	},

	ExamfeePostController(req,res,next){
		let {name,classname,roll,year,amount,paymentmode,paymentdate,remarks,examtrm,schoolname} = req.body
		/*const event = new Date()
		const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		console.log(event.toLocaleDateString('ar-EG'.options))*/

		/*const date = new Date()
		const options = { weekday: 'long', year: 'numeric', day: 'numeric', month: 'long'};
		let strdate = date.toLocaleDateString(options)*/
		//strdate.toUTCString()

		let examerror = ExamfeeValidation({name,classname,roll,year,amount,paymentmode,examtrm})
		if(examerror.isvalid){
			let {error} = examerror
			console.log(error)
			 return res.render('Examfee.ejs', {user:req.session.user,error,duplicate:false})
		}
		let examfee = new Examfee({
			name,
			classname,
			roll,
			year,
			examtrm,
			amount,
			paymentmode,
			paymentdate,
			remarks,
			schoolname,
			village:req.session.user.village,
			user:req.session.user.name
		}) 
		Examfee.findOne({classname,roll,year,schoolname},(err,result)=>{
			if (err) {
				console.log(err)
			}
			if (result) {
				return res.render('Examfee.ejs', {user:req.session.user,error:{},duplicate:true})
			}

			examfee.save()
			.then(data=>{
				 return res.render('Examfee.ejs', {user:req.session.user,error:{},duplicate:false})
				console.log(data)
			})
			.catch(err=>console.log(err))
		})
		
		//console.log(req.body)
	},

	AllFeesGetController(req,res,next){
		/*let {schoolname} = req.session.user
		console.log(schoolname)
		Examfee.find({schoolname},(err,result)=>{
			if (err) {
					console.log(err)
				}
				res.render('allfees.ejs',{user:req.session.user,result})
		})*/

		res.render('allfees.ejs',{user:req.session.user,result:'',downloadfile:false})
	}, 

	//Don't Use This Controller... 

	AllFeesPostController(req,res,next){
			let {schoolname} = req.session.user
			let {classname,examtrm,year} = req.body

			/*const begining = new Date(beginingdate)
			const options = { weekday: 'long', year: 'numeric', day: 'numeric', month: 'long'};
			let beginingdt = begining.toLocaleDateString(options)


			const endining = new Date(endiningdate)
			const endiningoptions = { weekday: 'long', year: 'numeric', day: 'numeric', month: 'long'};
			let endiningdt = endining.toLocaleDateString(endiningoptions)*/

			Examfee.find({
						schoolname,
						classname,
						examtrm,
						year
			},(err,result)=>{
				if (err) {
					console.log(err)
				}
				if (result) {
					return res.render('allfees.ejs',{user:req.session.user,result,downloadfile:true})
				}
		}).sort({roll:1})
	}

}