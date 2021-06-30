var express = require('express');
var app = express();
var bodyParser = require('body-parser') 
require('dotenv').config()


// console.log("Hello World")
app.use(bodyParser.urlencoded({extended: false}))
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html' )
  })
  
  app.use('/public', express.static(__dirname + '/public'))


  app.route("/name").post(function(req, res) {
   
    var { first: firstName, last: lastName } = req.body;
    // Use template literals to form a formatted string
    res.json({
      name: `${firstName} ${lastName}`
    });
  });

//   app.get('/:word/echo', (req, res)=>{
//       res.send({echo : req.params.word})
//   })
//   app.use('/', (req,res,next)=>{
//       console.log(`${req.method} ${req.path} - ${req.ip}`)
//       next();
//   })
  
//   app.get('/now',(req,res,next)=>{
//     req.time =  new Date().toString()  
//     next();
//   },(req,res)=>{
//       res.send({time: req.time})
//   })
  
//   app.get('/json',(req,res)=>{
//     res.send(process.env.MESSAGE_STYLE==='uppercase'?{message: "Hello json".toUpperCase()}:{message: "Hello json"})
//   })
  

 module.exports = app;
