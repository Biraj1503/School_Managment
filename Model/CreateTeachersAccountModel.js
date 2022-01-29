const {Schema,model} = require('mongoose')

const TeachersAccountSchema = new Schema({
	name:{
		type:String,
		require:true,
		trim:true
	},

	subject:{
		type:String,
		require:true
	},

	idno:{
		type:Number,
		require:true
	},

	email:{
		type:String,
		require:true
	},

	password:{
		type:String,
		require:true
	},

	riligon:{
		type:String,
		require:true
	},

	gender:{
		type:String,
		require:true
	},

	phonenumber:{
		type:String,
		require:true
	},

	schoolname:{
		type:String,
		require:true
	},

	address:{
		type:String,
		require:true
	}

})

const TeachersAccount = model("TeachersAccount",TeachersAccountSchema)
module.exports = TeachersAccount