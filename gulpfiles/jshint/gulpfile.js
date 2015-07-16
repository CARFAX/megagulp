/*
  Module: 
        JSHint
  Desc: 
        Runs your code through your JShint linter. Uses .jshintrc file by default
  Deps:
        gulp
        gulp-jshint
*/

var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint', function() {  
  return gulp.src('vendor/*.js')        // gets all the JS under vendor/
  .pipe(jshint())                       // Lints code
  .pipe(jshint.reporter('default'));  // outputs to the default reporter
});

/*
  Desc:
    Runs your code through JSHint for JSX.

  Deps:
      gulp
      gulp-jshint
      jshint-jsx
*/

var jsxLint = require('jshint-jsx').JSXHINT;

gulp.task('lint-jsx', function() {
  return gulp.src('vendor/*.js')
  .pipe(jshint({
    linter: jsxLint
  }))
  .pipe(jshint.reporter('default'));
});
