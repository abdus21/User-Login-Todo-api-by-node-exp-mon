const profiles = require('../models/profileModel');

const createProfile = (req,res)=>{
    profiles.create(req.body,(err,data)=>{
        if(err){
            res.status(400).json({
                status : "fail",
                error : err
            })
        }else{
            res.status(200).json({
                status : "success",
                data : data
            })
        }
    })
};

const getProfile = (req,res)=>{
    res.status(200).json({
        message : "ok"
    })
};

const loginProfile = (req,res)=>{

    profiles.findOne({userName : req.user},(err,data)=>{
        if(err){
            res.status(400).json({
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
const updateProfile = (req,res)=>{

    profiles.updateOne(req.user,req.body,(err,data)=>{
        if(err){
            res.status(400).json({
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
    createProfile,
    getProfile,
    loginProfile,
    updateProfile,
}