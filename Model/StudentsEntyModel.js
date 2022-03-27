const {Schema,model} = require('mongoose')


const StudentsEntySchema = new Schema({
	schoolname:{
		type:String,
		required:true
	},

	classname:{
		type:Number,
		required:true
	},

	year:{
		type:Number,
		required:true
	},


	name:{
		type:String,
		required:true
	},

	roll:{
		type:Number,
		required:true
	},

	phone:{
		type:Number,
		required:true
	},

	address:{
		type:String,
		required:true
	}
	
})

const StudentsEnty = model('StudentsEnty', StudentsEntySchema)

module.exports = StudentsEnty