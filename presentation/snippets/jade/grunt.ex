module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    jade: {
      compile: {
        files: {
          "index.html": ["src/templates/*.jade"]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask('default', ['jade']);

};
