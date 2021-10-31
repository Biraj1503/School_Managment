const User = require('../Model/UserModel')
const Students = require("../Model/StudentsMode/StudentsprofileModel")

module.exports={
	async AllUserGetController(req,res,next){
	
			res.render('studenthomepage.ejs',{st:{},isLoggIn:{},user:req.session.user,error:"",search:false})
	},

	async AllUserPostController(req,res,next){
		let {roll,classname} = req.body

		let students = await Students.find()
		//console.log(students)
		try{
			let match = "Dosen't Match"
			students.filter(st=>{
				if (st.classname==classname && st.roll==roll) {
					console.log(st)
					return res.render('studenthomepage.ejs',{st,isLoggIn:{},user:req.session.user,error:"",search:true})
				}
				
			})

			res.render('studenthomepage.ejs',{st:{},isLoggIn:{},user:req.session.user,error:match,search:false})

		}catch(err){
			console.log(err)
		}
	}
}