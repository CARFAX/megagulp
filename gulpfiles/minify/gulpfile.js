/*
  Module: 
        Minify
  Desc: 
        Minifies your code (remove whitespaces, etc.)
  Deps:
        gulp
        gulp-uglify
        gulp-concat
*/

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('vendor', function() {  
  return gulp.src('vendor/*.js')        //gets all the JS under vendor/
    .pipe(concat('vendor.js'))          //combines it into vendor.js
    .pipe(uglify())                     //Minifies, shrinks filesize, etc.
    .pipe(gulp.dest('build/vendor.js')) //outputs to build/vendor.js
});
