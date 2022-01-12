module.exports = {
	StudentsIDGetCreateController(req,res,next){
		
		res.render("CreateStudentsAccount.ejs",{user:req.session.user})
	},
	StudentsIDPostCreateController(req,res,next){
		console.log(req.body)
	}
}