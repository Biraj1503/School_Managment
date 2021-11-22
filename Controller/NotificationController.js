const Notice = require('../Model/NotificationModel')
exports.NoticeGetController=(req,res,next)=>{
		res.render('postnotices.ejs',{user:req.session.user})
}

exports.NoticePostController = (req,res,next)=>{
	let {notice} = req.body

	const notices = new Notice({
		notice
	})

	notices.save()
	return res.render('postnotices.ejs',{user:req.session.user})
}

exports.allnoticesGetController=(req,res,next)=>{
	Notice.find()
	.then(notices=>{
		return res.render('getNotice.ejs',{editNotices:{},user:req.session.user,notices,edit:false})
	})
	.catch(err=>{
		console.log(err)
	})
	
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