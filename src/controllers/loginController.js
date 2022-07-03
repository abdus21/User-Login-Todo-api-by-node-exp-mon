const profiles = require('../models/profileModel');
const jwt = require('jsonwebtoken')

const loginUser = (req,res)=>{
    let {userName,password} = req.body;

    profiles.findOne({userName,password},(err,data)=>{
        if(err){
            res.status(400).json({
                status : "fail",
                error : err
            })
        }else{
            if(!data){
                res.status(400).json({
                    status : "success",
                    data : "unauthorize"
                })
    
            }else{
                // create jwt token
                let token = jwt.sign({userName:data.userName},process.env.SECRET_KEY,{expiresIn:"2d"});

                res.status(200).json({
                    status : "success",
                    token : token,
                    data : data
                })
            }
           
        };                   
        
    });
}

module.exports = loginUser