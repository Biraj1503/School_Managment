const {Schema,model} = require("mongoose")

const StockSchema = new Schema({
	productname:{
		type:String,
		required:true
	},
	unloaddate:{
		type:String,
		required:true
	},

	tbl:{
		type:String,
		required:true
	},

	trno:{
		type:Number,
		required:true
	},
	totalcase:{
		type:Number,
		required:true
	},

	year:{
		type:String,
		required:true
	},

	month:{
		type:String,
		required:true
	}

})

const  Stock = model('Stock',StockSchema)

module.exports = Stock