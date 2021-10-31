const {Schema,model} = require('mongoose')
const PollSchema= new Schema({
	title:{
		type:String,
		required:true,
		trim:true
	},

	description:String,
	
	totalVote:{
		type:Number,
		default:0
	},

	options:{
		type:[{
			name:String,
			vote:Number
		}]
	}
})
const Poll = model('Poll',PollSchema)
module.exports= Poll