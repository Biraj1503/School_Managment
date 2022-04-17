const router = require('express').Router()
const {
	StockGetController,
	StockPostController,
	StockreportGetController,
	DailyStockGetController,
	DailyStockPostController
} = require('../Controller/SctockreportController')

const {dashboardAthenticate} = require('../Authenticate/userAuthenticate')

router.get('/',dashboardAthenticate, StockGetController)

router.post('/',dashboardAthenticate, StockPostController)

router.get('/stockreport', StockreportGetController)

router.get('/stockreport/dailystock', DailyStockGetController)
router.post('/stockreport/dailystock', DailyStockPostController)
module.exports = router