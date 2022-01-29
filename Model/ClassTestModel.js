const {Schema,model} = require('mongoose')

const ClassTestSchema = new Schema({
	classname:{
		type:String,
		require:true,
		trim:true
	},

	examname:{
		type:String,
		require:true,
		trim:true
	},

	subject:{
		type:String,
		require:true,
		trim:true
	},

	date:{
		type:String,
		require:true
	},

	time:{
		type:String,
		require:true,
		trim:true
	},

	year:{
		type:String,
		require:true
	},

	schoolname:{
		type:String,
		require:true,
	},

	qusetionsnameone:{
		type:String,
		require:true
	},
	qusetionsnooneoptionone:{
		type:String,
		require:true
	},
	qusetionsnooneoptiontwo:{
		type:String,
		require:true
	},
	qusetionsnooneoptionthree:{
		type:String,
		require:true
	},

	qusetionsnooneoptionfour:{
		type:String,
		require:true
	},

	oneNOqusetionsAns:{
		type:String,
		require:true
	},

	qusetionsnametwo:{
		type:String,
		require:true
	},

	qusetionsnotwooptionone:{
		type:String,
		require:true
	},

	qusetionsnotwooptionTwo:{
		type:String,
		require:true
	},

	qusetionsnotwooptionthree:{
		type:String,
		require:true
	},

	qusetionsnotwooptionfour:{
		type:String,
		require:true
	},

	ansqusetionsNOtwo:{
		type:String,
		require:true
	},
	qusetionsnamethree:{
		type:String,
		require:true
	},

	qusetionsnothreeoptionone:{
		type:String,
		require:true
	},

	qusetionsnothreeoptiontwo:{
		type:String,
		require:true
	},

	qusetionsnothreeoptionthree:{
		type:String,
		require:true
	},

	qusetionsnothreeoptionfour:{
		type:String,
		require:true
	},

	ansqusetionsNOthree:{
		type:String,
		require:true
	},

	qusetionsnamefour:{
		type:String,
		require:true
	},

	qusetionsnofouroptionone:{
		type:String,
		require:true
	},

	qusetionsnofouroptiontwo:{
		type:String,
		require:true
	},

	qusetionsnofouroptionthree:{
		type:String,
		require:true
	},

	qusetionsnofouroptionfour:{
		type:String,
		require:true
	},

	ansqusetionsNOfour:{
		type:String,
		require:true
	},
	qusetionsnamefive:{
		type:String,
		require:true
	},

	qusetionsnofiveoptionone:{
		type:String,
		require:true
	},
	qusetionsnofiveoptiontwo:{
		type:String,
		require:true
	},

	qusetionsnofiveoptionthree:{
		type:String,
		require:true
	},
	qusetionsnofiveoptionfour:{
		type:String,
		require:true
	},

	ansqusetionsNOfive:{
		type:String,
		require:true
	},

	qusetionsnamesix:{
		type:String,
		require:true
	},
	qusetionsnosixoptionone:{
		type:String,
		require:true
	},

	qusetionsnosixoptiontwo:{
		type:String,
		require:true
	},

	qusetionsnosixoptionthree:{
		type:String,
		require:true
	},

	qusetionsnosixoptionfour:{
		type:String,
		require:true
	},

	ansqusetionsNOsix:{
		type:String,
		require:true
	},

	qusetionsnameseven:{
		type:String,
		require:true
	},

	qusetionsnosevenoptionone:{
		type:String,
		require:true
	},

	qusetionsnosevenoptiontwo:{
		type:String,
		require:true
	},

	qusetionsnosevenoptionthree:{
		type:String,
		require:true
	},

	qusetionsnosevenoptionfour:{
		type:String,
		require:true
	},
	ansqusetionsNOseven:{
		type:String,
		require:true
	},
	qusetionsnameeight:{
		type:String,
		require:true
	},
	qusetionsnoeightoptionone:{
		type:String,
		require:true
	},
	qusetionsnoeightoptiontwo:{
		type:String,
		require:true
	},
	qusetionsnoeightoptionthree:{
		type:String,
		require:true
	},
	qusetionsnoeightoptionfour:{
		type:String,
		require:true
	},
	ansqusetionsNOeight:{
		type:String,
		require:true
	},

	qusetionsnamenine:{
		type:String,
		require:true
	},
	qusetionsnonineoptionone:{
		type:String,
		require:true
	},
	qusetionsnonineoptiontwo:{
		type:String,
		require:true
	},
	qusetionsnonineoptionthree:{
		type:String,
		require:true
	},
	qusetionsnonineoptionfour:{
		type:String,
		require:true	},
	ansqusetionsNOnine:{
		type:String,
		require:true
	},
	qusetionsnameten:{
		type:String,
		require:true
	},
	qusetionsnotenoptionone:{
		type:String,
		require:true
	},
	qusetionsnotenoptiontwo:{
		type:String,
		require:true
	},
	qusetionsnotenoptionthree:{
		type:String,
		require:true
	},
	qusetionsnotenoptionfour:{
		type:String,
		require:true
	},
	ansqusetionsNOten:{
		type:String,
		require:true
	},

	qusetionsnameeleven:{
		type:String,
		require:true
	},
	qusetionsnoelevenoptionone:{
		type:String,
		require:true
	},
	qusetionsnoelevenoptiontwo:{
		type:String,
		require:true
	},
	qusetionsnoelevenoptionthree:{
		type:String,
		require:true
	},
	qusetionsnoelevenoptionfour:{
		type:String,
		require:true
	},
	ansqusetionsNOeleven:{
		type:String,
		require:true
	},


	qusetionsname12th:{
		type:String,
		require:true
	},

	qusetionsno12thoptiontwo:{
		type:String,
		require:true
	},
	qusetionsno12thoptionthree:{
		type:String,
		require:true
	},
	qusetionsno12thoptionfour:{
		type:String,
		require:true
	},
	ansqusetionsNO12th:{
		type:String,
		require:true
	},
	qusetionsname13th:{
		type:String,
		require:true
	},
	qusetionsno13thoptionone:{
		type:String,
		require:true
	},
	qusetionsno13thoptiontwo:{
		type:String,
		require:true
	},
	qusetionsno13thoptionthree:{
		type:String,
		require:true
	},
	qusetionsno13thoptionfour:{
		type:String,
		require:true
	},
	ansqusetionsNO13th:{
		type:String,
		require:true
	},
	qusetionsname14th:{
		type:String,
		require:true
	},
	qusetionsno14thoptionone:{
		type:String,
		require:true
	},
	qusetionsno14thoptiontwo:{
		type:String,
		require:true
	},
	qusetionsno14thoptionthree:{
		type:String,
		require:true
	},
	qusetionsno14thoptionfour:{
		type:String,
		require:true
	},
	ansqusetionsNO14th:{
		type:String,
		require:true
	},
	qusetionsname15th:{
		type:String,
		require:true
	},
	qusetionsno15thoptionone:{
		type:String,
		require:true
	},
	qusetionsno15thoptiontwo:{
		type:String,
		require:true
	},
	qusetionsno15thoptionthree:{
		type:String,
		require:true
	},
	qusetionsno15thoptionfour:{
		type:String,
		require:true
	},
	ansqusetionsNO15th:{
		type:String,
		require:true
	},
	qusetionsname16th:{
		type:String,
		require:true
	},
	qusetionsno16thoptionone:{
		type:String,
		require:true
	},
	qusetionsno16thoptiontwo:{
		type:String,
		require:true
	},
	qusetionsno16thoptionthree:{
		type:String,
		require:true
	},
	qusetionsno16thoptionfour:{
		type:String,
		require:true
	},
	ansqusetionsNO16th:{
		type:String,
		require:true
	},
	qusetionsname17th:{
		type:String,
		require:true
	},
	qusetionsno17thoptionone:{
		type:String,
		require:true
	},
	qusetionsno17thoptiontwo:{
		type:String,
		require:true
	},
	qusetionsno17thoptionthree:{
		type:String,
		require:true
	},
	qusetionsno17thoptionfour:{
		type:String,
		require:true
	},
	ansqusetionsNO17th:{
		type:String,
		require:true
	},
	qusetionsname18th:{
		type:String,
		require:true
	},
	qusetionsno18thoptionone:{
		type:String,
		require:true
	},
	qusetionsno18thoptiontwo:{
		type:String,
		require:true
	},
	qusetionsno18thoptionthree:{
		type:String,
		require:true
	},
	qusetionsno18thoptionfour:{
		type:String,
		require:true
	},
	ansqusetionsNO18th:{
		type:String,
		require:true
	},
	qusetionsname19th:{
		type:String,
		require:true
	},
	qusetionsno19thoptionone:{
		type:String,
		require:true
	},
	qusetionsno19thoptiontwo:{
		type:String,
		require:true
	},
	qusetionsno19thoptionthree:{
		type:String,
		require:true
	},
	qusetionsno19thoptionfour:{
		type:String,
		require:true
	},
	ansqusetionsNO19th:{
		type:String,
		require:true
	},
	qusetionsname20th:{
		type:String,
		require:true
	},
	qusetionsno20thoptionone:{
		type:String,
		require:true
	},
	qusetionsno20thoptiontwo:{
		type:String,
		require:true
	},
	qusetionsno20thoptionthree:{
		type:String,
		require:true
	},
	qusetionsno20thoptionfour:{
		type:String,
		require:true
	},
	ansqusetionsNO20th:{
		type:String,
		require:true
	}

})

const ClassTest = model('ClassTest', ClassTestSchema)

module.exports = ClassTest