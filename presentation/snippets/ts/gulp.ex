'use strict';

var gulp        = require('gulp')
    ,typescript = require('gulp-typescript');

module.exports = gulp.task('ts', function () {

  return gulp.src('scripts/**/*.ts')
    .pipe(typescript())
    .pipe(gulp.dest('dist/scripts'));

});
