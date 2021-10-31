const User = require('../Model/UserModel')
const {singupvalidation,loginValidation} = require('../Validation/Uservalidation')
const bcrypt = require('bcrypt')

module.exports = {
	async singupGetController(req,res,next){
		res.render('home.ejs', {
			errors:{}
		})
	},

	async singupPostController(req,res,next){
		let {name,email,password,conformpassword,birthday,gender}= req.body
		let match = singupvalidation({name,email,password,conformpassword,birthday,gender})
		if(match.isValid){
			let {error} = match
			res.render('home.ejs', {
				errors:error
			})
		}
		let hash = await bcrypt.hash(password,10)
		console.log(hash)
		let user = new User({
			name,
			email,
			password:hash,
			birthday,
			gender
		})

		let data = await user.save()
		console.log(data)
		res.redirect('/login')
	},

	async loginGetController(req,res,next){
		console.log(req.session.isLoggIn,req.session.user)
		res.render('login.ejs',{errors:{},users:'',pass:''})
	},

	async loginPostController(req,res,next){
		try{

			let {email,password} = req.body
			let notMatch = loginValidation({email,password})
			if(notMatch.isvalid){
				let {error} = notMatch
				res.render('login.ejs',{errors:error,users:'',pass:''})
			}
			let user = await User.findOne({email})
			console.log(`This Login User ${user}`)
			if(!user){
				res.render('login.ejs',{errors:{},users:'This is Not Your Email',pass:''})
			}

			let compare = await bcrypt.compare(password,user.password)
			console.log(`This is Compare password ${compare}`)
			if(!compare){
				res.render('login.ejs',{errors:{},users:'',pass:"Password Dose't Match"})
			}

			req.session.isLoggIn=true
			req.session.user=user
			req.session.save(err=>{
				
				if(err){
				 return next(err)

				}
				res.redirect('/school')	
			})
			//res.setHeader('set-cookie','isLoggIn=true')
			//res.redirect('/createStudentprofile')
		}
		catch(err){
			console.log(err)
		}	
	},

	async logoutController(req,res,next){
		console.log(req.session.user)
		if (req.session) {
			req.session.destroy(err=>{
			if (err) return next(err)
			res.redirect('/login')	
		})
		}
	}
}