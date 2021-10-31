const {Schema,model} = require('mongoose')


const UserSchema = new Schema({
	name:{
		type:String,
		required:true,
		trim:true
	},

	email:{
		type:String,
		required:true,
		trim:true
	},

	password:{
		type:String,
		required:true,
		trim:true
	},

	birthday:{
		type:Date,
		required:true,
		trim:true
	},

	gender:{
		type:String,
		required:true,
		trim:true
	},

	profile:{
		type:Schema.Types.ObjectId,
		ref:'studentsProfileModel'
	}
})

const User = model('User', UserSchema)

module.exports = User