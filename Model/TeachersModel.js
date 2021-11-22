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
	schoolname:String,
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

	teachersprofilepics:{
		type:String,
		required:true,
	},

	description:String,

	createTime:{
		type:Date,
		default: new Date()
	},

	User:{
		type:Schema.Types.ObjectId,
		ref:'User',
		required:true
	}

},{timestamps:true})

const Teachers = model('Teachers',TeacherSchema)

module.exports = Teachers