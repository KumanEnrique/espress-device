const path = require('path')
const express = require('express')
const device = require('express-device')
const app = express()

//settings
app.set('port',process.env.PORT || 3000)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

//middleware
app.use(device.capture())

//routes
app.use('/',(req,res)=>{
    // res.send('hola ' + req.device.type)
    res.render('index',{device:req.device.type})
})

//starting the server 
app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`);
})
