module.exports = {
	SchoolRoutineGetController(req,res,next){
		res.render("schoolroutine.ejs",{user:req.session.user})
	},
	SchoolRoutinePostController(req,res,next){
		/*let {option,frm} = req.body
		let ok = [frm]
		ok = ok.map(frm=>{
			return {
				classname:frm.classname
			}
			
		})

		console.log(option)*/
		res.render("schoolroutine.ejs",{user:req.session.user})
	}	
}