module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'dist/css/style.min.css': 'sass src/css/style.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);

};
