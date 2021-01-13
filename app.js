const express = require('express')
const path = require('path')

//init app
const app = express()   
const port = 9000

//Loadview Engine 
app.engine('pug', require('pug').__express)
app.set('views',path.join(__dirname,'views'))
app.set('view engine','pug')

//home route
app.get('/',function(req,res){
    res.render('index',{
        title:'Hello'
    })
})
app.get('/login',function(req,res){
    res.render('index',{
        title:'Login'
    })
})
app.get('/signup',function(req,res){
    res.send('Sign up page')
}) 
app.get('/user:id',function(req,res){
    const id = req.params.id
    res.send('Welcome User'+id)
})
app.get('/user',function(req,res){
    const id = req.query.id
    res.send('Welcome User'+id)
})

//start server
app.listen(port,function(req,res){
    console.log(`Example app listening at http://localhost:${port}`)
})
