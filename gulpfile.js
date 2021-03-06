/**
 * Created by Hernan Y.Ke on 4/14/15.
 */
var gulp=require('gulp'),
    nodemon=require('nodemon'),
    gulpMocha=require('gulp-mocha'),
    env=require('gulp-env'),
    supertest=require('supertest');


gulp.task('default',function(){
    nodemon({
        script:'app.js',
        ext:'js',
        env:{
            PORT:8000
        },
        ignore:['./node_modules/**']
    })
        .on('restart',function(){
            console.log('Wating for restarting');
        });
});


gulp.task('test',function(){
    env({vars:{ENV:'Test'}});
    gulp.src('tests/*.js',{read:false}).pipe(gulpMocha({reporter:'my'}))
})