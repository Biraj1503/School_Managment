module.exports={
	classRoutineGetController(req,res,next){
		res.render("ClassRoutine.ejs",{user:req.session.user})
	},
	classRoutinePostController(req,res,next){
		console.log(req.body)
	}
}
