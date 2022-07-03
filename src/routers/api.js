const express = require('express');
const loginUser = require('../controllers/loginController');
const { createProfile, getProfile, loginProfile, updateProfile } = require('../controllers/profileController');
const { createTodo, selectTodo, updateTodo, updateStatus, deleteTodo } = require('../controllers/toDoListController');
const authUser = require('../middlewares/authVerify');
const router = express.Router();

router.post('/createProfile',createProfile);
router.get('/getProfile',getProfile);
router.post('/login',loginUser);
router.get('/loginProfile',authUser,loginProfile);
router.post('/updateProfile',authUser,updateProfile);


router.post('/createTodo',authUser,createTodo);
router.get('/selectTodo',authUser,selectTodo);
router.patch('/updateTodo/:id',authUser, updateTodo);
router.patch('/updateStatus/:id',authUser, updateStatus);
router.delete('/deleteTodo/:id',authUser, deleteTodo);



module.exports = router