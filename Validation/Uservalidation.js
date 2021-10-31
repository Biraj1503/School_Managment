module.exports = {
	singupvalidation(user){
		let error={}
		if(!user.name){
			error.name='Name Is Not An Empty'
		}else if(user.name.length > 25){
			error.name='Name Is Not Gratherthan 15 Charcters'
		}

		if(!user.email){
			error.email="Email Is Not An Empty"
		}

		if(!user.password){
			error.password='Password Is Not An Empty'
		}

		if (!user.conformpassword) {
			error.conformpassword='conformpassword Is Not An Empty'
		}else if (user.password !== user.conformpassword) {
			error.conformpassword="Password Dosen't Match"
		}

		if (!user.birthday) {
			error.birthday="Enter Your Date Of Birth"
		}

		if (!user.gender) {
			error.gender='Check your Gender'
		}

		return {
			error,
			isValid :Object.keys(error).length > 0 
		}
	},

	loginValidation(user){
		let error = {}

		if(!user.email){
			error.email="Email Is Not An Empty"
		}

		if (!user.password) {
			error.password="Password Is Not An Empty"
		}

		return {
			error,
			isvalid:Object.keys(error).length > 0 
		}
	}
}