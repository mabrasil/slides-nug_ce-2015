'use strict';

var gulp      = require('gulp')
    jshint = require('gulp-jshint');

module.exports = gulp.task('jshint', function (cb) {
 return gulp.src('./src/js/*.js')
    .pipe(jshint())
});
