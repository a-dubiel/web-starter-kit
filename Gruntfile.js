module.exports = function(grunt) {

  'use strict';

  grunt.config.init({

    /* Project details */
    pkg: grunt.file.readJSON('package.json'),

    /* Paths */
    path: {
      source   : 'source',
      temp     : 'temp',
      build    : 'build',
      reports  : 'reports',
      data     : 'data',
      docs     : 'docs',
      docsSass : 'sass',
      docsJS   : 'js',
      fonts    : 'fonts',
      images   : 'images',
      media    : 'media',
      misc     : 'misc',
      scripts  : 'scripts',
      styles   : 'styles',
      vendors  : 'vendors',
      views    : 'views'
    },

    /* Banner */
    banner: {
      exapanded:
        '/**\n' +
        ' * <%= pkg.title %> v<%= pkg.version %>\n' +
        ' * <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %>\n' +
        ' * \n' +
        ' * 2014 <%= pkg.author.name %> | <%= pkg.author.url %>\n' +
        ' */\n\n',
      compressed:
        '/*!<%= pkg.title %> v<%= pkg.version %> | <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %> | 2014 <%= pkg.author.name %>*/'
    },

    /* Global tasks */
    watch        : require( './grunt/watch.js' ).task,
    connect      : require( './grunt/connect.js' ).task,
    clean        : require( './grunt/clean.js' ).task,
    copy         : require( './grunt/copy.js' ).task,
    concat       : require( './grunt/concat.js' ).task,

    /* Image tasks */
    imagemin     : require( './grunt/imagemin.js' ).task,
    svgmin       : require( './grunt/svgmin.js' ).task,

    /* JavaScript tasks */
    jshint       : require( './grunt/jshint.js' ).task,
    uglify       : require( './grunt/uglify.js' ).task,

    /* CSS tasks */
    scsslint     : require( './grunt/scsslint.js' ).task,
    sass         : require( './grunt/sass.js' ).task,
    cmq          : require( './grunt/cmq.js' ).task,
    autoprefixer : require( './grunt/autoprefixer.js' ).task,
    csscomb      : require( './grunt/csscomb.js' ).task,
    csslint      : require( './grunt/csslint.js' ).task,
    csso         : require( './grunt/csso.js' ).task,

    /* HTML tasks */
    validation   : require( './grunt/validation.js' ).task,

    /* Notifications */
    notify       : require( './grunt/notify.js' ).task,

    /* Documentation */
    sassdoc      : require( './grunt/sassdoc.js' ).task,
    dox          : require( './grunt/dox.js' ).task

  }); // grunt.config.init()

  /* Dependencies */
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  /* Tasks */
  grunt.registerTask('default', [
    'build',
    'server'
  ]);

  grunt.registerTask('build', [
    'clean:build',
    'data',
    'fonts',
    'images',
    'media',
    'misc',
    'scripts',
    'styles',
    'vendors',
    'views',
    'notify:build'
  ]);

  grunt.registerTask('server', [
    'connect:static', // or 'connect:dynamic' if project uses PHP
    'watch',
    'notify:server'
  ]);

  grunt.registerTask('data', [
    'copy:data',
    'notify:data'
  ]);

  grunt.registerTask('docs', [
    'docs:scripts',
    'docs:styles'
  ]);

  grunt.registerTask('docs:scripts', [
    'clean:docsJS',
    'dox:build',
    'notify:docs'
  ]);

  grunt.registerTask('docs:styles', [
    'clean:docsSass',
    'sassdoc:build',
    'notify:docs'
  ]);

  grunt.registerTask('fonts', [
    'copy:fonts',
    'notify:fonts'
  ]);

  grunt.registerTask('media', [
    'copy:media',
    'notify:media'
  ]);

  grunt.registerTask('misc', [
    'copy:misc',
    'notify:misc'
  ]);

  grunt.registerTask('vendors', [
    'copy:vendors',
    'notify:vendors'
  ]);

  grunt.registerTask('views', [
    'validation:views', // remove if project uses PHP
    'copy:views',
    'notify:views'
  ]);

  grunt.registerTask('images', [
    'imagemin:images',
    'svgmin:images',
    'notify:images'
  ]);

  grunt.registerTask('scripts', [
    'jshint:scripts',
    'concat:scripts',
    'uglify:scripts',
    'copy:scripts',
    'clean:temp',
    'notify:scripts'
  ]);

  grunt.registerTask('styles', [
    'scsslint',
    'sass:styles',
    'cmq:styles',
    'autoprefixer:styles',
    'csscomb:styles',
    'csslint:styles',
    'csso:styles',
    'copy:styles',
    'clean:temp',
    'notify:styles'
  ]);

};
