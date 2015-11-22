module.exports = function (grunt) {

  'use strict';

    grunt.initConfig({
      copy: {
        main: {
          files: [
            {src: ['index.html'], dest: 'dest/'},
          ],
        },
      },
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy']);
};
