exports.TeachersLoginAuthenticate=(req,res,next)=>{
	if (req.session.TeachersIsLogin) {
		return res.redirect('/teachers/teachersprofile')
	}

	return next()
}


exports.TeachersprofilepageAuth=(req,res,next)=>{
	if (!req.session.TeachersIsLogin) {
		return res.redirect('/teachers/teachersLogins')
	}

	return next()
}