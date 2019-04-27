var express = require('express')
var app = express()
var comments = []

app.use('/public/',express.static('./public/'))

app.engine('html',require('express-art-template'))

app.get('/',function(req,res){
  res.render('index.html',{
    comments:comments
  })
})
app.get('/post',function(req,res){
  res.render('post.html')
  
})
app.get('/pinglun',function(req,res){
  var comment = req.query
  comments.unshift(comment)
  res.redirect('/')
})
app.listen(3000,function(){
  console.log('messageBorder is running...')
})