/*
  Module: 
        Concat
  Desc: 
        Merges multiple files into one, mainly for performance/request reasons.
  Deps:
        gulp
        gulp-concat
*/

var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('vendor', function() {  
  return gulp.src('vendor/*.js')        //takes all JS files under vendor/
    .pipe(concat('vendor.js'))          //concats into one vendor.js file
    .pipe(gulp.dest('build/vendor.js')) //outputs to build/vendor.js
});
