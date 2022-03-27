const {Schema,model}  = require("mongoose")

const notificationSchema = new Schema({
	notice:{
		type:String,
		required:true,
		trim:true
	},

	date:{
		type:Date,
		default:new Date()
	},
	
	createedTime:{
		type:Date,
		default:new Date()
	},

	User:{
		type:Schema.Types.ObjectId,
		ref:'User'
	}

},{timestamps:true})

const Notice = model('Notice', notificationSchema)

module.exports = Notice