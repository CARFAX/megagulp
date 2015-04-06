/*
  Module: 
        Rename
  Desc: 
        Renames a file from one thing to another
  Deps:
        gulp
        gulp-rename
*/

var gulp = require('gulp');
var rename = require('gulp-rename');


gulp.task('vendor', function() {  
  return gulp.src('vendor/vendor.js') //grabs vendor/vendor.js
    .pipe(name('lib.js'))             //renames the object ot lib.js
    .pipe(gulp.dest('build/'))        //outputs to build/lib.js
});
