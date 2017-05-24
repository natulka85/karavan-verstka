'use strict';

var gulp =require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var jade = require('gulp-jade');
var path = require('path');


function html(){

    return gulp.src(['./jade/**/*.jade', '!./jade/**/_*.jade'])
        .pipe(jade({pretty: true}).on('error', console.log))
        .pipe(gulp.dest('html_pages'))
}


gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));

});
/*
gulp.task('concat:scss', function() {
    gulp.src(['./sass/blocks/!**!/!*.scss'])
        .pipe(concat('_blocks.scss'))
        .pipe(gulp.dest('./sass/'));

});*/

gulp.task('html-task', function(){
    html();
    gulp.watch(['./jade/**/*.jade'], html);
});


gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});


gulp.task('prefix', function () {
    return gulp.src('./css/global.css')
        .pipe(autoprefixer({
            browsers: ['last 16 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css/'));
});

gulp.task('prefix:watch', function (){
    gulp.watch('./css/global.css', ['prefix']);
});

gulp.task('default', function(callback) {
    runSequence(
        'sass',
        'sass:watch',
        'prefix:watch',
        'html-task',


        callback);

});

