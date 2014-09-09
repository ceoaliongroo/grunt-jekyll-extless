/*
 * grunt-jekyll-extless
 * https://github.com/Gizra/medicart/tree/master/task
 *
 * Copyright (c) 2014 Carlos Mantilla
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/tmp']
    },

    // Prepare enviroment.
    copy: {
      dist: {
        files: [{
          expand: true,
          cwd: 'test/dist/',
          src: ['**/*.html'],
          dest: 'test/tmp/'
        }]
      }
    },

    // Configuration to be run (and then tested).
    jekyllExtless: {
      medicart: {
        src: ['test/_post/**/*.md'],
        dest: 'test/tmp/'
      }
    },
    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test',
    [
      'clean:tests',
      'copy:dist',
      'jekyllExtless'
    ]);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
