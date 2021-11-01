const express = require('express')
const mongoose = require('mongoose')
const loginrouter = require('./Router/LoginRoute')
const router = require('./Router/SingupRoute')
const session=require('express-session')
var MongoDBStore = require('connect-mongodb-session')(session);
const studentsRoute = require('./Router/dashboardRoute')
const AllstudentsRoute = require('./Router/AllstudentsRoute')
const studentsResult = require('./Router/ExamResultRoute')
const Examfee = require('./Router/ExamfeeRoute')
const {setLocals} = require('./Midalware/setLocals');
const {bindwithUser} = require('./Authenticate/userAuthenticate');
const admicardRoute = require('./Router/AdmitcardRoute')
//const {bindwithUser} = require('./Authenticate/userAuthenticate')
const routers = require('./Router/Pollroute')
//const {AllgetPoll,ViewgetPoll,ViewpostPoll} = require('./Controller/Controller')
const NoticeRoute = require('./Router/NotificationRoute')
const app = express()
app.set('views engin','ejs')
const MONGDB_URI = 'mongodb+srv://SM:studentmanagment@newproject.92n8k.mongodb.net/students'

var store = new MongoDBStore({
  uri:MONGDB_URI,
  collection: 'session',
  expires:60*60*1000
})

const Midalware = [
	express.static('Public'),
	express.urlencoded({extened:true}),
	express.json(),
	session({
		secret:process.env.SECRET_KEY || 'SECRET_KEY',
		resave:false,
		saveUninitialized:false,
		store:store
	}),

	setLocals()
]

app.use(Midalware)
//app.use('/notice',NoticeRoute)
//app.use('/createpoll',routers)
//app.get('/allpolls',AllgetPoll)
//app.get('/allpolls/:id',ViewgetPoll)
//app.post('/allpolls/:id',ViewpostPoll)
/*app.use('/admitcard',admicardRoute)
app.use('/examfee',Examfee)
app.use('/result',studentsResult)
app.use('/login',loginrouter)
app.use('/school',studentsRoute)
app.use('/user',router)*/
app.use('/',AllstudentsRoute)
/*app.get('/',(req,res)=>{
	res.render('home.ejs')
})*/

/*app.get('*',(req,res)=>{
	res.json({
		message:"404 Not Found"
	})
})*/

const PORT = process.env.PORT || 3000

mongoose.connect(MONGDB_URI,
		{useNewUrlParser:true},
		()=>{
			app.listen(PORT,()=>{
				console.log(`Server Is Running PORT ${PORT}`)
				console.log('Database Is Running Now')
			})
		}

) 