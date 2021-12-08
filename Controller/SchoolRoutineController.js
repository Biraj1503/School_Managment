const SchoolRoutine = require('../Model/SchoolRoutineModel')
module.exports = {
	SchoolRoutineGetController(req,res,next){
		let routine = {
			subject:[{}],
			date:[{}]
		}
		res.render("schoolroutine.ejs",{user:req.session.user,routine})
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
			let routine = await schoolroutine.save()
			//console.log(schoolroutine)
			/*ok = ok.forEach(ok=>{
				return {
					ok
				}
			})*/
			res.render("schoolroutine.ejs",{user:req.session.user,routine})
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
		res.render("ShowExamRoutin.ejs", {result,searchresult:false})
	},

	AllUserSerchRoutinePostController(req,res,next){
			let {classname,year,extram,schoolname} = req.body
			SchoolRoutine.findOne({classname,year,extram,schoolname},(err,result)=>{
				if (err) {
					console.log(err)
				}
				console.log(result)
				res.render("ShowExamRoutin.ejs",{result, searchresult:true})
			})	
	}
}