const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    userName : {type : String},
    todoSubject : {type : String},
    todoDescription : {type : String},
    todoStatus : {type : String,default : "New"},
    todoCreateDate : {type : Date},
    todoUpdateDate : {type : Date}
},{
    versionKey : false,
})

module.exports = mongoose.model('Todolist',dataSchema)