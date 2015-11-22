'use strict';

var gulp     = require('gulp')
    ,sass  = require('gulp-sass');

module.exports = gulp.task('sass', function () {

  return gulp.src('sass src/css/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css/style.min.css'))

});
