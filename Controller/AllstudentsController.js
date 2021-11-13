const User = require('../Model/UserModel')
const Students = require("../Model/StudentsMode/StudentsProfileModel")

module.exports={
	async AllUserGetController(req,res,next){
	
			res.render('studenthomepage.ejs',{st:{},isLoggIn:{},user:req.session.user,error:"",search:false})
	},

	async AllUserPostController(req,res,next){
		let {roll,classname,schoolname} = req.body

		let students = await Students.find()
		//console.log(students)
		try{
			let match = "Dosen't Match"
			students.filter(st=>{
				if (st.classname==classname && st.roll==roll && st.schoolname==schoolname) {
					//console.log(st)
					return res.render('studenthomepage.ejs',{st,isLoggIn:{},user:req.session.user,error:"",search:true})
				}
				
			})

			res.render('studenthomepage.ejs',{st:{},isLoggIn:{},user:req.session.user,error:match,search:false})

		}catch(err){
			console.log(err)
		}
	}
}