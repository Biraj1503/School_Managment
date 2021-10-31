const router = require('express').Router()
const {ExamfeeGetController,ExamfeePostController} = require('../Controller/ExamfeeController')
router.get('/',ExamfeeGetController)
router.post('/',ExamfeePostController)
module.exports= router