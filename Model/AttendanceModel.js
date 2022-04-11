const {Schema,model} = require('mongoose')

const AttendanceSchema = new Schema({
			classname:{
				type:Number,
				required:true
			},

			roll:{
				type:Number,
				required:true
			},

			name:{
				type:String,
				required:true
			},

			year:{
				type:String,
				required:true
			},

			present:{
				type:String,
				required:true
			},

			date:{
				type:String,
				required:true
			},

			month:{
				type:String,
				required:true
			},

			schoolname:{
				type:String,
				required:true
			}
	})

const Attendance = model('Attendance', AttendanceSchema)

module.exports = Attendance