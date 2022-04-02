const {Schema,model}  = require("mongoose")

const notificationSchema = new Schema({
	notice:{
		type:String,
		required:true,
		trim:true
	},

	date:{
		type:String,
		required:true
	},
	
	createedTime:{
		type:Date,
		default:new Date()
	},
	
	schoolname:{
		type:String,
		required:true
	},

	User:{
		type:Schema.Types.ObjectId,
		ref:'User'
	}

},{timestamps:true})

const Notice = model('Notice', notificationSchema)

module.exports = Notice