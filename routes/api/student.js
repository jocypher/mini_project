const express = require("express")
const router = express.Router()
const  {getStudents,createStudent,getStudent} = require('../../controller/studentsController')

router.route('/')
.get(getStudents)
.post(createStudent)

router.route('/:id')
.get(getStudent)

module.exports = router