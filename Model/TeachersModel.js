const {Schema,model} = require('mongoose')

const TeacherSchema = new Schema({
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

	address:{
		type:String,
		required:true,
		trim:true
	},

	subject:{
		type:String,
		required:true,
		trim:true
	},

	profilepic:String,

	createTime:{
		type:Date,
		default: new Date()
	}
},{timestamps:true})

const Teachers = model('Teachers',TeacherSchema)

module.exports = Teachers