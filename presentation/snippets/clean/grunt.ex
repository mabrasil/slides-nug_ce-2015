module.exports = function (grunt) {

  'use strict';

    grunt.initConfig({
      clean: ['src/*']
    });

    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean']);
};
