/**
 * Created by Hernan Y.Ke on 4/17/15.
 */
var express=require('express');

var routes =function(Book){
    var bookRouter =express.Router();

    bookRouter.route('/')
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
            });
        // res.json(responseJson);
    });

    return bookRouter;

};




module.exports = routes;