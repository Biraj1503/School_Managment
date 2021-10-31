const Result = require('../Model/StudentsMode/ExamResultModel')
module.exports={
	resultfileValidation(result){
		let error = {}
		if(!result.name){
			error.name='Please Enter Your Name...'
		}

		if(!result.classname){
			error.classname="Please Enter Your ClassName..."
		}

		if (!result.roll) {
			error.roll="Please Enter Your Roll"
		}

		if (!result.section) {
			error.section='Please Enter Your Section'
		}

		if (!result.year) {
			error.year='Please Enter Your Year'
		}

		return{
			error,
			isvalid:Object.keys(error).length > 0 
		}
	}
}