/*
  Module: 
        Clean
  Desc: 
        Blows away the specified folder. Commonly used to obliterate the objects
        in build/ or dist/
  Deps:
        gulp
        gulp-clean
*/

var gulp = require('gulp');
clean = require('gulp-clean');

gulp.task('clean', function(){
  return gulp.src('build', {read: false})
    .pipe(clean());
});
