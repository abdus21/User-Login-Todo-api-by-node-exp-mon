const app = require('./app')






app.listen(process.env.SERVER_PORT,()=>{
    console.log('server is runnig');
})