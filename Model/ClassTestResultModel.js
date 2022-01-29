const {Schema,model} = require('mongoose')

const ClasstestResultSchema = new Schema({
			name:{
				type:String,
				require:true
			},
			classname:{
				type:String,
				require:true
			},
			roll:{
				type:String,
				require:true
			},
			examname:{
				type:String,
				require:true
			},
			subject:{
				type:String,
				require:true
			},
			date:{
				type:String,
				require:true
			},
			year:{
				type:String,
				require:true
			},

			questionsno1:{
				type:String,
				require:true
			},

			options1:{
				type:String,
				require:true
			},

			correctans1:{
				type:String,
				require:true
			},

			questionsno2:{
				type:String,
				require:true
			},

			qusetionsnotwooption:{
				type:String,
				require:true
			},

			correctans2:{
				type:String,
				require:true
			},

			questionsno3:{
				type:String,
				require:true
			},

			qusetionsnothreeoption:{
				type:String,
				require:true
			},

			correctans3:{
				type:String,
				require:true
			},

			questionsno4:{
				type:String,
				require:true
			},

			qusetionsnofouroption:{
				type:String,
				require:true
			},

			correctans4:{
				type:String,
				require:true
			},

			questionsno5:{
				type:String,
				require:true
			},

			qusetionsnofiveoption:{
				type:String,
				require:true
			},

			correctans5:{
				type:String,
				require:true
			},

			questionsno6:{
				type:String,
				require:true
			},

			qusetionsnosixoption:{
				type:String,
				require:true
			},

			correctans6:{
				type:String,
				require:true
			},

			questionsno7:{
				type:String,
				require:true
			},

			qusetionsnosevenoption:{
				type:String,
				require:true
			},

			correctans7:{
				type:String,
				require:true
			},

			questionsno8:{
				type:String,
				require:true
			},

			qusetionsnoeightnoption:{
				type:String,
				require:true
			},

			correctans8:{
				type:String,
				require:true
			},

			questionsno9:{
				type:String,
				require:true
			},

			questionsno9:{
				type:String,
				require:true
			},

			correctans9:{
				type:String,
				require:true
			},

			qusetionsnotenoption:{
				type:String,
				require:true
			},

			questionsno10:{
				type:String,
				require:true
			},

			qusetionsnotennoption:{
				type:String,
				require:true
			},

			correctans10:{
				type:String,
				require:true
			},
			
			questionsno11:{
				type:String,
				require:true
			},

			qusetionsnoelevennoption:{
				type:String,
				require:true
			},

			correctans11:{
				type:String,
				require:true
			},

			questionsno12:{
				type:String,
				require:true
			},

			qusetionsno12thnoption:{
				type:String,
				require:true
			},

			correctans12:{
				type:String,
				require:true
			},

			questionsno13:{
				type:String,
				require:true
			},

			qusetionsno13thnoption:{
				type:String,
				require:true
			},

			correctans13:{
				type:String,
				require:true
			},

			questionsno14:{
				type:String,
				require:true
			},

			qusetionsno14thnoption:{
				type:String,
				require:true
			},
			correctans14:{
				type:String,
				require:true
			},

			questionsno15:{
				type:String,
				require:true
			},

			qusetionsno15thnoption:{
				type:String,
				require:true
			},

			correctans15:{
				type:String,
				require:true
			},

			questionsno16:{
				type:String,
				require:true
			},

			qusetionsno16thnoption:{
				type:String,
				require:true
			},

			correctans16:{
				type:String,
				require:true
			},

			questionsno17:{
				type:String,
				require:true
			},

			qusetionsno17thnoption:{
				type:String,
				require:true
			},

			correctans17:{
				type:String,
				require:true
			},

			questionsno18:{
				type:String,
				require:true
			},
			qusetionsno18thoption:{
				type:String,
				require:true
			},

			correctans18:{
				type:String,
				require:true
			},

			questionsno19:{
				type:String,
				require:true
			},
			qusetionsno19thnoption:{
				type:String,
				require:true
			},

			correctans19:{
				type:String,
				require:true
			},

			questionsno20:{
				type:String,
				require:true
			},

			qusetionsno20thnoption:{
				type:String,
				require:true
			},

			correctans20:{
				type:String,
				require:true
			}

})

const ClasstestResult = model('ClasstestResult',ClasstestResultSchema)

module.exports = ClasstestResult