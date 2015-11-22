'use strict';

var gulp = require('gulp');

module.exports = gulp.task('copy', function(){

  return gulp.src('index.html')
    .pipe(gulp.dest('dest/'))

})
