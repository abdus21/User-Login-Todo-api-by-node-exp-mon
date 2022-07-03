const mongoose = require('mongoose');
const mongoDBConnection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_STRING);
        console.log(`mongo DB connection successful HOSt : ${mongoose.connection.host}`.green);
    }catch(error){
        console.log(`${error}`.red);
    }
}


module.exports = mongoDBConnection