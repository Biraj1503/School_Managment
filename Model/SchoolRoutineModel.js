const {Schema,model} = require('mongoose')

const SchoolRoutineSchema= new Schema({
	classname:{
		type:String,
		required:true
	},
	subject:{
		type:[{}]
	},

	date:{
		type:[{}]
	},

	day:{
		type:[{}]
	},

	time:{
		type:[{}]
	},

	schoolname:String,

	year:{
		type:String,
		required:true
	},

	extram:{
		type:String,
		required:true
	},

	createTime:{
		type:Date,
		default: new Date()
	}
},{timestamps:true})

const SchoolRoutine = model("SchoolRoutine", SchoolRoutineSchema)

module.exports = SchoolRoutine

