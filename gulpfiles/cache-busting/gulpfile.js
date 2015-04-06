/*
  Module: 
        Cache-busting
  Desc: 
        Tricks browser into dodging the cache-check for a certian file.
        Pretty cool stuff actually.
  Deps:
        gulp
        gulp-rev-append
*/

var gulp = require('gulp');
var rev = require('gulp-rev-append');

gulp.task('rev', function() {
  gulp.src('./index.html')
    .pipe(rev())
    .pipe(gulp.dest('.'));
});

/*
  Note, you have to include rev=@@hash on the urls in the templates that you'd
  like to cache-bust.
*/
