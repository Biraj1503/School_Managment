const SchoolRoutine = require('../Model/SchoolRoutineModel')
const User = require('../Model/UserModel')
module.exports = {
	SchoolRoutineGetController(req,res,next){
		res.render("schoolroutine.ejs",{user:req.session.user})
	},
	async SchoolRoutinePostController(req,res,next){
		try{
			let {classname,subject,date,day,time,extram} = req.body
			/*let d = new Date(option2)
			d.toISOString()*/
			//let ok=''
			subject = subject.map(sub=>{
				return{
					subjectroutin:sub
				}
			})

			date = date.map(dt=>{
				return{
					routindate:dt
				}
			})


			day = day.map(dy=>{
				return{
					routinday:dy
				}
			})


			time = time.map(tm=>{
				return{
					routintime:tm
				}
			})

			let d = new Date()
			let year = d.getFullYear()

			let schoolroutine = new SchoolRoutine({
				classname,
				subject,
				date,
				day,
				time,
				extram,
				year,
				schoolname:req.session.user.schoolname
			})
			await schoolroutine.save()
			//console.log(schoolroutine)
			/*ok = ok.forEach(ok=>{
				return {
					ok
				}
			})*/
			res.render("schoolroutine.ejs",{user:req.session.user})
		}
		catch(err){
			console.log(err)
		}
		
	},

	AllUserSerchRoutineGetController(req,res,next){
		let result = {
			subject:[{}],
			date:[{}],
			time:[{}],
			day:[{}]
		}
		User.find()
		.then(data=>{
			res.render("ShowExamRoutin.ejs", {result,searchresult:false,data})
		})
		.catch(err=>console.log(err))
	},

	AllUserSerchRoutinePostController(req,res,next){
			let {classname,year,extram,schoolname} = req.body
			SchoolRoutine.findOne({classname,year,extram,schoolname},(err,result)=>{
				if (err) {
					console.log(err)
				}
				console.log(result)
				res.render("ShowExamRoutin.ejs",{result, searchresult:true,data:''})
			})	
	},

	SchoolRoutineModifyGetController(req,res,next){
		let result = {
			subject:[{}],
			date:[{}],
			time:[{}],
			day:[{}]
		}

		res.render('ModifyRoutine.ejs',{user:req.session.user,result,searchresult:false,error:''})
	},
	SchoolRoutineModifyPostController(req,res,next){
		let {classname,extram} = req.body
		let {schoolname} = req.session.user
		let d = new Date()
		let year = d.getFullYear()

		SchoolRoutine.findOne({classname,extram,year,schoolname},(err,result)=>{
			if (err) {
				console.log(err)
			}
			if (result) {
				return res.render('ModifyRoutine.ejs',{user:req.session.user,result,searchresult:true,error:''})
			}

			let emptyresult = {
				subject:[{}],
				date:[{}],
				time:[{}],
				day:[{}]
			}
			return res.render('ModifyRoutine.ejs',{user:req.session.user,result:emptyresult,searchresult:false,error:"Don't Publish"})
		
		})

	},

	SingleRoutineEditController(req,res,next){
		let {_id} = req.params
		let {classname,subject,date,day,time,extram,id} = req.body
		let {schoolname} = req.session.user
			/*let d = new Date(option2)
			d.toISOString()*/
			//let ok=''
		/*SchoolRoutine.findOne({schoolname,_id},()=>{

		})*/
		console.log(id)

			subject = subject.map(sub=>{
				return{
					subjectroutin:sub
				}
			})

			date = date.map(dt=>{
				return{
					routindate:dt
				}
			})


			day = day.map(dy=>{
				return{
					routinday:dy
				}
			})


			time = time.map(tm=>{
				return{
					routintime:tm
				}
			})

			SchoolRoutine.findOneAndUpdate({_id:id},{$set:{
				classname,
				extram,
				subject,
				date,
				day,
				time
			}},{new:true})

			.then(result=>{
				return res.render('ModifyRoutine.ejs',{user:req.session.user,result,searchresult:true,error:""})
			})
			.catch(err=>console.log(err))

	},
	SingleRoutineDeletetController(){

	}
}