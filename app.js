/**
 * Created by Hernan Y.Ke on 4/14/15.
 */
var express=require('express')
    mongoose=require('mongoose');

var db=mongoose.connect('mongodb://localhost/bookAPI');

var Book=require('./models/BookModel')
var app=express();

var port =process.env.PORT||3000;

var bookRouter =express.Router();

bookRouter.route('/Books').get(function(req,res){
    //var responseJson ={hello:"My app"};
    Book.find(function(err,books){
        if(err){
            res.status(500).send(err);
        }
        else{
            res.json(books);
        }
    })
    res.json(responseJson);
});

app.use('/api',bookRouter);

app.get('/',function(req,res){
    res.send("welcome");
})

app.listen(port,function(){
    console.log("test");
})