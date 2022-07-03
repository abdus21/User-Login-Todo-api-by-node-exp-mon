const express = require('express');
const bodyPerser = require('body-parser')
 require('dotenv').config();
 const colors = require('colors')
 const router = require('./src/routers/api');

// init express
const app = express()

// security middleware import
const hpp = require('hpp');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const mongoDBConnection = require('./src/configs/db');

// security middleware implement
app.use(hpp());
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());

// request rate limite
const limit = rateLimit({
    windowMs : 15 * 60 * 1000,
    max : 100
})

app.use(limit);
// body init
 app.use(express.json())
app.use(express.urlencoded({extended : false})); 


// mongo DB connectio
mongoDBConnection()

// Routing implement
app.use('/api/v1',router);

// Undefined Routing implement
app.use('*',(req,res)=>{
    res.status(404).json({
        status : "Fail",
        data : "Not Found"
    })
})


module.exports = app