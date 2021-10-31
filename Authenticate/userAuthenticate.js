const User = require('../Model/UserModel')
	exports.bindwithUser =async(req,res,next)=>{
		if (!req.session.isLoggIn) {
			return next()
		}
		
		try{
			let user = await User.findById(req.session.user._id)
			req.user = user
			next()
		}
		catch(err){
			next(err)
		}

	}

	exports.dashboardAthenticate =async(req,res,next)=>{
		if (!req.session.isLoggIn) {
			return res.redirect('/login')
		}
		return next()
	}

	exports.pollcreateAthenticate=(req,res,next)=>{
		if(!req.session.isLoggIn){
			return res.redirect("/")
		}

		return next()
	}

	exports.LOgInAndSingUpAthentication=async(req,res,next)=>{
		if(req.session.isLoggIn){
			return res.redirect('/school')
		}
		return next()
	}