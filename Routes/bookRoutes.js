/**
 * Created by Hernan Y.Ke on 4/17/15.
 */
var express=require('express');

var routes =function(Book){
    var bookRouter =express.Router();

    var bookController = require('../controllers/bookController')(Book);

    bookRouter.route('/')
        .post(bookController.post
        /*function(req,res){
            var book=new Book(req.body);

            book.save();
            res.status(201).send(book);
        }*/)
        .get(bookController.get);


    bookRouter.use('/:bookId',function(res,req,next){

        Book.findById(req.params.bookId,function(err,book){
            if(err){
                res.status(500).send(err);
            }
            else if(book){
                req.book=book;
                next();
            }

                else{
                res.status(404).send('wrong');
            }
        });
    });


    bookRouter.route('/:bookId')

        .get(function(req,res){
            res.json(req.book);

        })
    .put(function(req,res){



        Book.find(req.params.bookId,function(err,book){

                req.book.title=req.body.title;
                req.book.author=req.body.author;
                req.book.genre=req.body.genre;
                req.book.read=req.body.read;
                req.book.save(function(err){
                    if(err){
                        res.status(500).send(err);
                    }
                    else{
                        res.json(res.book);
                    }
                });
            })
            .patch(function(req,res){
                for(var p in req.body){
                    req.book[p]=req.body[p];
                }


                req.book.save(function(err){
                    if(err){
                        res.status(500).send(err);
                    }
                    else{
                        res.json(res.book);
                    }
                });
            })
            .delete(function(res,req){
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.status(204).SEND('Has been removed');
                }
            });
        // res.json(responseJson);
    });

    return bookRouter;

};




module.exports = routes;