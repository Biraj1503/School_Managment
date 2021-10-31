const {Schema,model} = require('mongoose')

const studentsExamResultSchema =  new Schema({
	name:{
		type:String,
		required:true,
		trim:true
	},

	roll:{
		type:Number,
		required:true,
		trim:true
	},

	classname:{
		type:Number,
		required:true,
		trim:true
	},
	section:{
		type:String,
		required:true,
		trim:true
	},
	year:{
		type:Number,
		required:true,	
		trim:true
	},

	exatram:{
		type:String,
		required:true,
		trim:true
	},
	groupname:String,
	
	subject:{
		type:{
			subjectname1:String,
			subjectname2:String,
			subjectname3:String,
			subjectname4:String,
			subjectname5:String,
			subjectname6:String,
			subjectname7:String,
			subjectname8:String,
			subjectname9:String,
			subjectnumber1:String,
			subjectnumber2:String,
			subjectnumber3:String,
			subjectnumber4:String,
			subjectnumber5:String,
			subjectnumber6:String,
			subjectnumber7:String,
			subjectnumber8:String,
			subjectnumber9:String,
			groupsubject1:String,
			groupsubject2:String,
			groupsubject3:String,
			groupsubject4:String,
			groupsubjectnumber1:String,
			groupsubjectnumber2:String,
			groupsubjectnumber3:String,
			groupsubjectnumber4:String,
		}
	},

	discription:String
	
},{timestamps:true})

const Result = model('Result',studentsExamResultSchema) 

module.exports = Result