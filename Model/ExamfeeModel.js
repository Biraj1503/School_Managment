const {Schema,model} = require("mongoose")

const ExamfeeSchema = new Schema({
	name:{
		type:String,
		require:true,
		trim:true
	},

	classname:{
		type:Number,
		require:true,
		trim:true
	},


	roll:{
		type:Number,
		require:true,
		trim:true
	},

	year:{
		type:Number,
		require:true
	},

	amount:{
		type:Number,
		require:true,
		trim:true
	},

	paymentmode:{
		type:String,
		require:true
	},

	paymentdate:{
		type:String,
		require:true
	},

	remarks:{
		type:String,
		require:true,
		trim:true
	},

	user:{
		type:String,
		required:true
	},

	examtrm:{
		type:String,
		require:true
	},

	createTime:{
		type:Date,
		default:new Date()
	}

},{timestamps:true})

const Examfee = model('Examfee',ExamfeeSchema)

module.exports = Examfee