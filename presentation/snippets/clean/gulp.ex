'use strict';

var gulp = require('gulp')
    ,del = require('del');

module.exports = gulp.task('clean', function (cb) {

 return del('src/*', cb);

});
