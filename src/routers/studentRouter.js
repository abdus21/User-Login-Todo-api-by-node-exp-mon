const express = require('express');
const { insertStudent, getAllStudent, updateStudent, deleteStudent } = require('../src/routers/controllers/studentController');
const router = express.Router();

router.get('/getstudents',getAllStudent)
router.post('/insertstudent',insertStudent);
router.patch('/update/:id',updateStudent)
router.delete('/delete/:id',deleteStudent)


module.exports = router