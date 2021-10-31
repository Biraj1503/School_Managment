const moment = require('moment');
exports.setLocals = () => {
  return (req,res,next) => {
    res.locals.user = req.user
    res.locals.isLoggIn = req.session.isLoggIn
    res.locals.moment=time=>moment(time).fromNow()
    next()
  }
}