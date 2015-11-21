'use strict';

var gulp         = require('gulp')
    ,browserSync = require('browser-sync');

module.exports = gulp.task('browser-sync', function () {

  browserSync.init(files, {
    server: {
      baseDir: 'src/*'
    }
  });
});
