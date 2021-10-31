const Poll = require('../Model/Pollmodel')
const chalk = require('chalk')
module.exports={

	PollgetController(req,res,next){
		res.render('create.ejs')
	},

	async PollpostController (req,res,next){
		let {title,description,options}=req.body
		console.log(req.body)
		options = options.map(opt=>{
			return{
				name:opt,
				vote:0
			}
		})

		if(title=='') {
			console.log('what do you want')
		}

		let poll = new Poll({
			title,
			description,
			options
		})
		try{
			await poll.save()
			res.redirect('/allpolls')
		}catch(err){
			console.log(err)
		}
	},

	async AllgetPoll(req,res,next){
		try{
			let Polls = await Poll.find()
			res.render('polls.ejs',{Polls})
		}catch(err){
			console.log(err)
		}
	},

	async ViewgetPoll(req,res,next){
		const {id} = req.params
		try{
			let Polls = await Poll.findById(id)
			let options = [...Polls.options]
			let result=[]
			/*options.forEach(option=>{
				let parcentage = (option.vote*100)/Polls.totalVote
				result.push({
					...option._doc,
					parcentage:parcentage ? parcentage : 0
				})
			})*/
			for ( i = 0; i<options.length;i++) {
				let option = options[i].vote
				let parcentage = (option*100)/Polls.totalVote
				result.push({
					...options._doc,
					parcentage:parcentage ? parcentage : 0
				})
			}
			console.log(chalk.blue.bgRed.bold(Polls))
			console.log(Poll.options)
			res.render('ViewPolls.ejs',{Polls,result})
		}catch(err){
			console.log(err)
		}
	},

	async ViewpostPoll(req,res,next){
		let {id} = req.params
		let optionId = req.body.option
		console.log(req.ips)
		try{
			let Polls = await Poll.findById(id)
			let options = [...Polls.options]
			let index = options.findIndex(o=>o.id === optionId)
			options[index].vote = options[index].vote + 1 

			let totalVote = Polls.totalVote + 1 

			await Poll.findOneAndUpdate(
			{_id:Polls._id},
			{$set:{options,totalVote}}
			)
			//res.cookie('name', 'tobi', { signed: true })
			res.cookie('name', 'Cook', {httpOnly: true })

			res.redirect('/allpolls/' +id)
		}catch(err){
			console.log(err)
		}
	}
}