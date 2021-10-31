const Examfee = require('../Model/ExamfeeModel')
const {ExamfeeValidation}= require('../Validation/ExamfeeValiadtion') 
module.exports={
	ExamfeeGetController(req,res,next){
		res.render('Examfee.ejs', {user:req.session.user,error:{}})
		/*Examfee.find()
		.then(admit=>{
			res.render('Examfee.ejs', {user:req.session.user,admit})
		})
		.catch(err=>{
			console.log(err)
		})*/
		
	},

	ExamfeePostController(req,res,next){
		let {name,classname,roll,year,amount,paymentmode,paymentdate,remarks,examtrm} = req.body
		const event = new Date()
		const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		console.log(event.toLocaleDateString('ar-EG'.options))
		let examerror = ExamfeeValidation({name,classname,roll,year,amount,paymentmode,examtrm})
		if(examerror.isvalid){
			let {error} = examerror
			console.log(error)
			 return res.render('Examfee.ejs', {user:req.session.user,error})
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
			user:req.session.user.name
		}) 

		examfee.save()
		.then(data=>{
			 return res.render('Examfee.ejs', {user:req.session.user,error:{}})
			console.log(data)
		})
		.catch(err=>console.log(err))
		console.log(req.body)
	}
}