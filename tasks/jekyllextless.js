/*
 * grunt-jekyll-extless
 * https://github.com/Gizra/medicart/tree/master/task
 *
 * Copyright (c) 2014 Carlos Mantilla
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('jekyllExtless', 'Remove trailing slash of jekyll site in amazon s3.', function () {

    var exec = require('shelljs/src/exec');

    var options = this.options({
      keyword: this.options.keyword || true,
      script: this.options.script || './rename.sh'
    });

    var isExpandedPair;
    var published;
    var filename;
    var fullpath;
    var config;
    var writeOptions = {
      encoding: null
    };

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      isExpandedPair = file.orig.expand || false;

      // Get file name.
      file.src.forEach(function(src) {

        config =  grunt.file.read(src);

        published = config
          .match(/published:[-+|\n\w\s:'\u0590-\u05FF\.\/?!,;"*()+\\]*/)[0]
          .replace(/\n/g, '^')
          .split('^')[0]
          .replace('published:', '')
          .trim();

        // Get file name.
        filename = config
          .match(/permalink:[-+|\n\w\s:'\u0590-\u05FF\.\/?!,;"*()+\\]*/)[0]
          .replace(/\n/g, '^')
          .split('^')[0]
          .replace('permalink:', '')
          .trim();

        if (published === 'true' && filename !== '\'/\'') {
          grunt.verbose.writeln('published: ', published, 'filename: ', filename);
          // Write file.
          fullpath =  file.dest + filename;
          grunt.file.write(fullpath + '.tmp', grunt.file.read(fullpath + '/index.html', writeOptions));
          grunt.verbose.writeln(' ');
          grunt.verbose.writeln('Saved tmp file ', fullpath + '.tmp');

          // Delete folder.
          grunt.file.delete(fullpath, {force:true});
          grunt.log.writeln('File "' + filename + '" created.');
        }

      });

      // Remove extension from the file.
      grunt.verbose.writeln('');
      grunt.log.writeln(exec('ls -las').output);
      grunt.verbose.writeln('Execute script ' + options.script + ' ' + file.dest);
      grunt.log.writeln(exec('bash ' + options.script + ' ' + file.dest).output);

    });

  });
};
