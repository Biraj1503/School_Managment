const {Schema,model} = require('mongoose')

const StudentsIdSchema = new Schema({
	name:{
		type:String,
		require:true,
		trim:true
	},

	classname:{
		type:String,
		require:true
	},

	roll:{
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

	photo:{
		type:String,
		require:true
	},

	riligin:{
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

const StudentsId = model("StudentsId",StudentsIdSchema)
module.exports = StudentsId