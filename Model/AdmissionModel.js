const {Schema,model} = require("mongoose")

const AddmissionModelSchema = new Schema({
		firstname:{
				type:String,
				required:true
			},

			lastname:{
				type:String,
				required:true
			},

			email:{
				type:String,
				required:true
			},

			phone:{
				type:String,
				required:true
			},

			city:{
				type:String,
				required:true
			},

			district:{
				type:String,
				required:true
			},

			nidno:{
				type:String,
				required:true
			},

			presentaddress:{
				type:String,
				required:true
			},
			prevschoolname:{
				type:String,
				required:true
			},
			admissionschool:{
				type:String,
				required:true
			},

			classname:{
				type:String,
				required:true
			},

			studentimage:{
				type:String,
				required:true
			},

			fathername:{
				type:String,
				required:true
			},

			mothername:{
				type:String,
				required:true
			},

			Parentsnid:{
				type:String,
				required:true
			},

			riligion:{
				type:String,
				required:true
			},

			createTime:{
				type:Date,
				default:Date.now()
			}

	},{timestamps:true})


const AddmissionModel = model('AddmissionModel',AddmissionModelSchema)
module.exports = AddmissionModel