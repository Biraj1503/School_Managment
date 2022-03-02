exports.StudentsLoginAuthenticate=(req,res,next)=>{
	if (req.session.StudentsIsLogin) {
		return res.redirect('/studentsaccount/studentsaccountpage')
	}

	return next()
}


exports.StudentsLogOutAuthenticate=(req,res,next)=>{
	if (!req.session.StudentsIsLogin) {
		return res.redirect('/studentsaccount/login')
	}

	return next()
}

exports.protectedRoute=(req,res,next)=>{
	if (!req.session.routeprocted) {
		return res.redirect('/studentsaccount/studentsaccountpage')
	}else if (req.session.routeprocted) {
		return res.redirect('/studentsaccount/findclasstestresult')
	}

	
}