module.exports = {
	ExamfeeValidation(user){
		const error= {}
		if(!user.name){
			error.name="Please Enter Your Student Name"
		}

		if(!user.classname){
			error.classname="Please Enter Your Student Class Name"	
		}

		if(!user.roll){
			error.roll="Please Enter Your Student Class Roll"	
		}

		if(user.year=='Selected Your Year'){
			error.year="Please Enter Your Student Year Name"	
		}

		if(user.examtrm=='Selected Your Examination'){
			error.examtrm="Please Enter Your Student Examination"	
		}

		if(!user.amount){
			error.amount="Please Enter Your Student Examination Fees"	
		}


		if(user.paymentmode=='Selected Your Payment Mode'){
			error.paymentmode="Selected Your Payment Mode"	
		}
		return{
			error,
			isvalid:Object.keys(error).length > 0 
		}
	}
}