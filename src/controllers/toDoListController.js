const Todolist = require('../models/todoListModel')

const createTodo = (req,res)=>{
   /*  let todoSubject = req.body.todoSubject;
    let todoDescription = req.body.todoDescription;
    let userName = req.user;
    let todoStatus = "New";
    let todoCreateDate = Date.now(); */
    let postBody = {
        todoSubject : req.body.todoSubject,
        todoDescription : req.body.todoDescription,
        userName : req.user,
        todoStatus : "New",
        todoCreateDate : Date.now(),
        todoUpdateDate : Date.now()
    }

    Todolist.create(postBody,(err,data)=>{
        if(err){
            res.status(404).json({
                status : "fail",
                error : err
            });
        }else{
            res.status(200).json({
                status : "success",
                data : data
            });
        }
    })
};

const selectTodo = (req,res)=>{
    Todolist.findOne({userName : req.user},(err,data)=>{

        if(err){
            res.status(404).json({
                status : "fail",
                error : err
            });
        }else{
            res.status(200).json({
                status : "success",
                data : data
            });
        }
    })
}
const updateTodo = (req,res)=>{

    let postBody = {
        todoSubject : req.body.todoSubject,
        todoDescription : req.body.todoDescription,
        todoUpdateDate : Date.now()
    }

    Todolist.findByIdAndUpdate( req.params.id,postBody,(err,data)=>{

        if(err){
            res.status(404).json({
                status : "fail",
                error : err
            });
        }else{
            res.status(200).json({
                status : "success",
                data : data
            });
        }
    })
};

const updateStatus = (req,res)=>{

 /*    let postBody = {
        todoSubject : req.body.todoSubject,
        todoDescription : req.body.todoDescription,
        todoUpdateDate : Date.now()
    } */

    Todolist.findByIdAndUpdate( req.params.id,req.body,(err,data)=>{

        if(err){
            res.status(404).json({
                status : "fail",
                error : err
            });
        }else{
            res.status(200).json({
                status : "success",
                data : data
            });
        }
    })
}
const deleteTodo = (req,res)=>{

 /*    let postBody = {
        todoSubject : req.body.todoSubject,
        todoDescription : req.body.todoDescription,
        todoUpdateDate : Date.now()
    } */

    Todolist.deleteOne({id : req.params.id},(err,data)=>{

        if(err){
            res.status(404).json({
                status : "fail",
                error : err
            });
        }else{
            res.status(200).json({
                status : "success",
                data : data
            });
        }
    })
}


module.exports = {
    createTodo,
    selectTodo,
    updateTodo,
    updateStatus,
    deleteTodo,
}