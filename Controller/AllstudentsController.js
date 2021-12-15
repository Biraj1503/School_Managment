const User = require('../Model/UserModel')
const Students = require("../Model/StudentsMode/StudentsProfileModel")

module.exports={
 AllUserGetController(req,res,next){
			User.find()
			.then(data=>{
				res.render('studenthomepage.ejs',{st:{},isLoggIn:{},user:req.session.user,error:"",search:false,data})
			})
			.catch(err=>console.log(err))
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
					return res.render('studenthomepage.ejs',{st,isLoggIn:{},user:req.session.user,error:"",search:true,data:''})
				}
				
			})

			res.render('studenthomepage.ejs',{st:{},isLoggIn:{},user:req.session.user,error:match,search:false,data:''})

		}catch(err){
			console.log(err)
		}
	}
}