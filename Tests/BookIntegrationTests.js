/**
 * Created by Hernan Y.Ke on 4/17/15.
 */
var should =require('should'),
    request=require('supertest'),
    app=require('../app.js'),
    mongoose=require('mongoose'),
    Book=mongoose.model('Book'),
    agent=request.agent(app);

describe('Book Crud',function(){
    it('should allowa a book to be posted and return a read and _id',function(done){

        var bookPost = {title:'new Book',author:'Ke',genre:'Fiction'};

        agent.post('/api/books')
            .send(bookPost).expect(200).end(function(err,result){
                results.body.read.should.equal(false);
                results.body.should.have.property('_id');
                done();
            });

    });
    afterEach(function(done){
        Book.remove().exec();
        done();
    })
})
