/**
 * Created by Hernan Y.Ke on 4/17/15.
 */
var should =require('should'),
    sinon =require('sinon');

describe('Book Controller Testing',function(){
    describe('Post test',function(){
        it('should allow ',function(){
            var book = function(book){
                this.save=function(){}
            };


            var req={
                body:{
                    author:"Jo"
                }
            }
            var res={
                status:sinon.spy(),
                send:sinon.spy()
            }

            var bookController = require('../controllers/bookController')(Book);
            bookController.post(req,res);

            res.status.calledWith(400).should.equal(true,'Bdd '+res.status.args[0][0]);
            res.status.calledWith('Title is required').should.equals(true);

        })
    })
})