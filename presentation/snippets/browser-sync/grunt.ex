module.exports = function (grunt) {

  'use strict';

    grunt.initConfig({
      browserSync: {
        dev: {
          bsFiles: {
            src : [
              'src/*'
            ]
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync']);
};
