const {Schema,model} = require('mongoose')

const SchoolRoutineSchema= new Schema({
	classname:{
		type:String,
		required:true
	}
	option:{
		type:[{
			subject:{
				type:String,
				required:true,
				trim:true
			},
			examinationdate:{
				type:String,
				required:true,
				trim:true
			},
			day:{
				type:String,
				required:true
			},

			timing:{
				type:String,
				required:true
			}
		}]
	}
})

const SchoolRoutine = model("SchoolRoutine", SchoolRoutineSchema)

module.exports = SchoolRoutine

