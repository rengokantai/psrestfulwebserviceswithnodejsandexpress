/**
 * Created by Hernan Y.Ke on 4/14/15.
 */
var express=require('express'),
    mongoose=require('mongoose'),
    bodyParser=require('body-parser');

var db=mongoose.connect('mongodb://localhost/bookAPI');

var Book=require('./models/BookModel')
var app=express();

var port =process.env.PORT||3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

bookRouter=require('./Routes/bookRoutes');




app.use('/api',bookRouter);

app.get('/',function(req,res){
    res.send("welcome");
})

app.listen(port,function(){
    console.log("test");
})