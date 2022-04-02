const Notice = require('../Model/NotificationModel')
const User = require('../Model/UserModel')
exports.NoticeGetController=(req,res,next)=>{
		res.render('postnotices.ejs',{user:req.session.user})
}

exports.NoticePostController = (req,res,next)=>{
	let {schoolname} = req.session.user
	let {notice,date} = req.body

	const notices = new Notice({
		notice,
		date,
		schoolname
	})

	notices.save()
	return res.render('postnotices.ejs',{user:req.session.user})
}

exports.allnoticesGetController=(req,res,next)=>{
	User.find()
	.then(schoolname=>{
		res.render('getNotice.ejs',{user:req.session.user,schoolname,notices:[{}]})
	})
	.catch(err=>console.log(err))

	
}

exports.allnoticesPostController=(req,res,next)=>{
	let {schoolname,date} = req.body
	Notice.find({schoolname,date})
	.then(notices=>{
		res.render('getNotice.ejs',{user:req.session.user,schoolname:[{}],notices})
	})
	.catch(err=>console.log(err))
}
exports.editNotices=(req,res,next)=>{
	const {_id} = req.params

	let {notice} = req.body

	Notice.findOneAndUpdate(_id,{$set:{notice}},{new:true})
	.then(editNotices=>{
		return res.render('getNotice.ejs',{editNotices,notices:{},edit:true})
	})
	.catch(err=>{
		console.log(err)
	})
}