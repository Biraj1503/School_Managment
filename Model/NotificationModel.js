const {Schema,model}  = require("mongoose")

const notificationSchema = new Schema({
	notice:{
		type:String,
		required:true,
		trim:true
	},

	createedTime:{
		type:Date,
		default:new Date()
	}

},{timestamps:true})

const Notice = model('Notice', notificationSchema)

module.exports = Notice