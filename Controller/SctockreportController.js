const User = require('../Model/UserModel')
const Stock = require("../Model/StockModel")

module.exports = {
	StockGetController(req,res,next){
		res.render('Stockreport.ejs',{user:req.session.user,duplicate:false})
	},

	StockPostController(req,res,next){
		let {productname,unloaddate,tbl,trno,totalcase,year,month} = req.body
		Stock.findOne({productname,trno}, (err,stock)=>{
			if (err) console.log(err)
			if (stock) {
				res.render('Stockreport.ejs',{user:req.session.user,duplicate:true})
			}else{
				let daliystock = new Stock({
					productname,
					unloaddate,
					tbl,
					trno,
					totalcase,
					year,
					month
				})

				daliystock.save()
				.then(()=>{
					res.render('Stockreport.ejs',{user:req.session.user,duplicate:false})
				})
				.catch(err=>console.log(err)) 
			}	
		})

	},

	StockreportGetController(req,res,next){
		Stock.find()
		.then(productedname=>{
			//console.log(productedname)
			const totalcase = productedname.map(item => item.totalcase).reduce((prev, curr) => prev + curr, 0);
			let pro = productedname.length
			res.render("individualStock.ejs",{productedname,downloadfile:true,pro,totalcase})
		})
		.catch(err=>console.log(err))
	},

	DailyStockGetController(req,res,next){
		res.render("getStockreport.ejs",{pro:[{}],downloadfile:false,prolength:'',total:''})
	},
	
	DailyStockPostController(req,res,next){
		let {unloaddate} = req.body
		Stock.find({unloaddate})
		.then(pro=>{
			let total = pro.map(total=>total.totalcase).reduce((prev,curr)=> prev + curr,0)
			let prolength = pro.length
			res.render("getStockreport.ejs",{pro,downloadfile:true,prolength,total})
		})
		.catch(err=>console.log(err))

	}
}
