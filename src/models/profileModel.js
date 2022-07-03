const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    firstName :{
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    userName : {
        type : String,
        required : true,
        unique : true
    },
    mobile : {
        type : String,
        required : true,
        unique : true
    },
    city : {
        type : String,
        default : "dhaka"
    },
    password : {
        type : String,
        required : true,
        unique : true,
    }
},{
    versionKey : false,
})

module.exports = mongoose.model('profiles',dataSchema)