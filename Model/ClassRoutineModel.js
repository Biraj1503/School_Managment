const {Schema,model} = require('mongoose')

const classRoutineSchema = new Schema({
	classname:{
		type:String,
		required:true	
	},

	subjectname:{
		type:[{}]
	},

	classtime:{
		type:[{}]
	},

	year:String,

	schoolname:{
		type:String,
		required:true
	}
})

const ClassRoutine = model('ClassRoutine', classRoutineSchema)

module.exports = ClassRoutine