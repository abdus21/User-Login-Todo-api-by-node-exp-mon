const jwt = require('jsonwebtoken')


const authUser = (req,res,next)=>{
    let token = req.headers.authorization.split(' ')[1]
    //let token = req.headers['token']
    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
        if(err){
            res.status(401).json({
                status : "unauthorized",
                error : err

            });
        }else{
            
            req.user = decoded.userName
            next()

        }
    })

}

module.exports = authUser