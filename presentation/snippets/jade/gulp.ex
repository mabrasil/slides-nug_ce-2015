'use strict';

var gulp     = require('gulp')
    ,jade    = require('gulp-jade');

module.exports = gulp.task('jade', function () {
  return gulp.src('src/templates/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('index.html'))
});
