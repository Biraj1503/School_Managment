const {Schema,model} = require("mongoose")

const AssigmentSchema= new Schema({
	classname:{
		type:String,
		required:true
	},

	assigmentno:{
		type:Number,
		required:true
	},

	subject:{
		type:String,
		required:true
	},

	startingdate:{
		type:String,
		required:true
	},

	endingdate:{
		type:String,
		required:true
	},

	/*questionstitle:{
		type:[{
			titlename:String
		}]
	},*/

	title:String,

	questions:{
		type:[{
			questionsname:{
				type:String,
				required:true
			}
		}]
	},

	schoolname:{
		type:String,
		required:true
	},

	createTime:{
		type:Date,
		default: new Date()
	}
},{timestamps:true})

const Assigment = model('Assigment', AssigmentSchema)

module.exports = Assigment