module.exports = function (grunt) {

  'use strict';

    grunt.initConfig({
      typescript: {
        base: {
          src: ['scripts/**/*.ts'],
          dest: 'dist/scripts',
        }
      },
    });

    grunt.loadNpmTasks('grunt-typescript');

    grunt.registerTask('default', ['ts']);
};
