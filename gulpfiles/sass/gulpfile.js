/*
  Module: 
        SASS
  Desc: 
        Compiles your sass to CSS. *HEADS UP* - You need ruby installed and the
        SASS gem installed.
        
        `gem install sass`
  Deps:
        gulp
        gulp-rename
*/

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compileSass', function(){
  return gulp.src("/stylesheets/*.sass")
    .pipe(sass(sourcemap: 'inline'))       //Compile SASS to CSS with Sourcemaps!
    .on('error', function(err){           //If theres an error message...
      console.log(err.message);           //Log the error
    })
    .pipe(gulp.dest('public/css/'));      //Output the compiled CSS to /public/css
});
