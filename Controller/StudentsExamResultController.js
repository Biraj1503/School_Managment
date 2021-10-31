const Result = require('../Model/StudentsMode/ExamResultModel')
const User = require('../Model/UserModel')
const Students = require("../Model/StudentsMode/StudentsprofileModel")
const {resultfileValidation} = require('../Validation/resultvalidation')
module.exports ={
	async StudentsGetResult(req,res,next){
		res.render('result.ejs',{user:req.session.user,errors:{},typerror:false})
	},
	
	async StudentsPostResult(req,res,next){
		let {
			name,
			roll,
			classname,
			section,
			year,
			groupname,
			subjectname1,
			subjectname2,
			subjectname3,
			subjectname4,
			subjectname5,
			subjectname6,
			subjectname7,
			subjectname8,
			subjectname9,
			subjectnumber1,
			subjectnumber2,
			subjectnumber3,
			subjectnumber4,
			subjectnumber5,
			subjectnumber6,
			subjectnumber7,
			subjectnumber8,
			subjectnumber9,
			groupsubject1,
			groupsubject2,
			groupsubject3,
			groupsubject4,
			groupsubjectnumber1,
			groupsubjectnumber2,
			groupsubjectnumber3,
			groupsubjectnumber4,
			discription,
			exatram
		} = req.body

		/*let match =  resultfileValidation({name,roll,classname,section,year})
		let samename = await Result.find()
		try{
			if(name && roll && classname){
				samename.findIndex(dtv=>{
					if (dtv.roll==roll && dtv.classname==classname) {
						res.render('result.ejs',{user:req.session.user,errors:{},typerror:true})
						return false
				}

		})
		let index = samename.findIndex(dtv=>dtv.name===)

		}else{
			if(match.isvalid) {
				let {error} = match
				console.log(error)
				return res.render('result.ejs',{user:req.session.user,errors:error,typerror:false})		
				}
			}

			console.log('nnn')		
		}
		catch(err){
			console.log(err)
		}*/

		 let match =  resultfileValidation({name,roll,classname,section,year})
		if (match.isvalid) {
			let {error} = match
			console.log(error)
			return res.render('result.ejs',{user:req.session.user,errors:error,typerror:false})		
		}

		let result = new Result({
			name,
			roll,
			classname,
			section,
			year,
			/*groupname,*/
			subject:{
				groupname,
				subjectname1,
				subjectname2,
				subjectname3,
				subjectname4,
				subjectname5,
				subjectname6,
				subjectname7,
				subjectname8,
				subjectname9,
				subjectnumber1,
				subjectnumber2,
				subjectnumber3,
				subjectnumber4,
				subjectnumber5,
				subjectnumber6,
				subjectnumber7,
				subjectnumber8,
				subjectnumber9,
				groupsubject1,
				groupsubject2,
				groupsubject3,
				groupsubject4,
				groupsubjectnumber1,
				groupsubjectnumber2,
				groupsubjectnumber3,
				groupsubjectnumber4,
			},
			discription,
			exatram
		})

		await result.save()
		res.render('result.ejs',{user:req.session.user,errors:{},typerror:false})
	},

	async SearchResult(req,res,next){
		let {classname,roll,exatram,year} = req.body
		let findIndex = await Result.find()

			findIndex.findIndex(st=>{
			if (st.classname==classname && st.roll==roll && st.exatram==exatram && st.year==year) {
					console.log(st)
					return res.render('PublishResult.ejs',{user:{},st,preview:true,error:''})
				}				
			})

			return res.render('PublishResult.ejs',{user:{},st:{},preview:false,error:"Wrong Information"})
		},

		studentgetProfile(req,res,next){
			const {id} = req.params
			 /*let findProfile = await Result.findById(id)
			 let studentprofile = Students.find()
			 console.log(findProfile)
			 try{
			 	studentprofile.findIndex(sp=>{
			 		if(sp.name==findProfile.name){
			 			console.log(sp)
			 		}
			 	})
			 }
			 catch(err){
			 	console.log(err)
			 }*/

			 Result.findById(id)
			.then(data=>{
				Students.find()
				.then(st=>{
					st.findIndex(st=>{
						if(st.name == data.name && st.classname == data.classname && st.roll == data.roll && st.year == data.year){
							return res.render('profile.ejs',{st,nopro:'',pro:true})
						}
					})

					return res.render('profile.ejs',{st:{},nopro:"No Profile This Students..",pro:false})
				})
				.catch(err=>{
					console.log(err)
				})
			})
			.catch(err=>{
				console.log(err)
			})				
		},
		
		async AdminstudentGetResultEditDElete(req,res,next){
			
			res.render('AdmineditdeleteResult.ejs',{user:req.session.user,st:{},addminpreview:false,error:"", edit:''})
		},
		

		async AdminstudentPostResultEditDElete(req,res,next){
			let {classname,roll,exatram,year} = req.body
			let findIndex = await Result.find()

			findIndex.findIndex(st=>{
			if (st.classname==classname && st.roll==roll && st.exatram==exatram && st.year==year) {
					console.log(st)
					return res.render('AdmineditdeleteResult.ejs',{user:req.session.user,st,addminpreview:true,error:'', edit:''})
				}				
			})

			return res.render('AdmineditdeleteResult.ejs',{user:req.session.user,st:{},addminpreview:false,error:"Wrong Information", edit:''})
		},

		 editResult(req,res,next){
			let {_id} = req.params
			let {
			name,
			roll,
			classname,
			section,
			year,
			groupname,
			subjectname1,
			subjectname2,
			subjectname3,
			subjectname4,
			subjectname5,
			subjectname6,
			subjectname7,
			subjectname8,
			subjectname9,
			subjectnumber1,
			subjectnumber2,
			subjectnumber3,
			subjectnumber4,
			subjectnumber5,
			subjectnumber6,
			subjectnumber7,
			subjectnumber8,
			subjectnumber9,
			groupsubject1,
			groupsubject2,
			groupsubject3,
			groupsubject4,
			groupsubjectnumber1,
			groupsubjectnumber2,
			groupsubjectnumber3,
			groupsubjectnumber4,
			discription,
			exatram
		} = req.body

			Result.findOneAndUpdate(_id,{$set:{
				name,
				roll,
				classname,
				section,
				year,
				subject:{
				groupname,
				subjectname1,
				subjectname2,
				subjectname3,
				subjectname4,
				subjectname5,
				subjectname6,
				subjectname7,
				subjectname8,
				subjectname9,
				subjectnumber1,
				subjectnumber2,
				subjectnumber3,
				subjectnumber4,
				subjectnumber5,
				subjectnumber6,
				subjectnumber7,
				subjectnumber8,
				subjectnumber9,
				groupsubject1,
				groupsubject2,
				groupsubject3,
				groupsubject4,
				groupsubjectnumber1,
				groupsubjectnumber2,
				groupsubjectnumber3,
				groupsubjectnumber4,
			},
			discription,
			exatram
			}},{new:true})
			.then(st=>{
				console.log(st)
				return res.render('AdmineditdeleteResult.ejs',{user:req.session.user,st,addminpreview:true,error:'', edit:'Edit Successfull'})
			})
			.catch(err=>{
				console.log(err)
			})

		},

		deleteResult(req,res,net){
			let {_id} = req.params
			Result.findOneAndDelete(_id)
			.then(st=>{
				console.log(st)
				return res.render('AdmineditdeleteResult.ejs',{user:req.session.user,st,addminpreview:true,error:'', edit:'Delete Successfull'})
			})
			.catch(err=>{
				console.log(err)
			})
		}
			
}
