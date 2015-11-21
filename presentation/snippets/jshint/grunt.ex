module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    jshint: {
      files: ['src/js/*.js'],
    },
  });

  grunt.loadNpmTasks('grunt-jshint');

  grunt.registerTask('default', ['jshint']);

};
