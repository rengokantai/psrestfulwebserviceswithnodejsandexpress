/**
 * Created by Hernan Y.Ke on 4/17/15.
 */
var express=require('express');

var routes =function(){
    var bookRouter =express.Router();

    bookRouter.route('/Books')
        .post(function(req,res){
            var book=new Book(req.body);

            book.save();
            res.status(201).send(book);
        })
        .get(function(req,res){
            //var responseJson ={hello:"My app"};

            var query ={};
            if(req.query.genre){
                query.genre=req.query.genre;
            }

            Book.find(query,function(err,books){
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.json(books);
                }
            });
            // res.json(responseJson);
        });


    bookRouter.route('Books/:bookId')

        .get(function(req,res){
            //var responseJson ={hello:"My app"};



            Book.find(req.params.bookId,function(err,books){
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.json(book);
                }
            });
            // res.json(responseJson);
        });

    return bookRouter;

};




module.exports = routes;