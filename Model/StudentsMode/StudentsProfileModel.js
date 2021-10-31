const {Schema,model} = require('mongoose')

const StudentsProfileSchema= new Schema({
	user:{
		type:Schema.Types.ObjectId,
		ref:'User',
		required:true
	},

	name:{
		type:String,
		required:true,
		trim:true
	},

	classname:{
		type:Number,
		required:true,
		trim:true
	},

	roll:{
		type:Number,
		required:true,
		trim:true	
	},
	year:{
		type:Number,
		required:true,
		trim:true
	},
	email:{
		type:String,
		trim:true
	},

	phonenumber:{
		type:Number,
		required:true,
		trim:true
	},

	fathername:{
		type:String,
		required:true,
		trim:true	
	},

	mothername:{
		type:String,
		required:true,
		trim:true	
	},

	district:{
		type:String,
		required:true,
		trim:true	
	},

	village:{
		type:String,
		required:true,
		trim:true	
	},

	wordno:{
		type:String,
		required:true,
		trim:true	
	},

	birthday:{
		type:String,
		required:true,
		trim:true	
	},

	subject:{
		type:String,
		trim:true	
	},

	description:{
		type:String
	},

	religion:{
		type:String,
		required:true
	},

  profilepic:{
  	type:String
  },

  result:{
  	type:Schema.Types.ObjectId,
  	ref:'Result'
  }

})

const Students= model('StudentsProfile',StudentsProfileSchema)

module.exports = Students