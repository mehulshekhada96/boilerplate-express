var express = require('express');
var app = express();
require('dotenv').config()


// console.log("Hello World")

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html' )
  })
  
  app.use('/public', express.static(__dirname + '/public'))
  const mySecret = process.env.MESSAGE_STYLE
  let response = mySecret==='uppercase'?{message: "Hello json".toUpperCase()}:{message: "Hello json"}

  
  console.log(response)
  app.get('/json',(req,res)=>{
    res.send(response)
  
  
  })
  

 module.exports = app;
