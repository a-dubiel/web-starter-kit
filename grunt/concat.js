/**
 * Concatenate files
 * https://github.com/gruntjs/grunt-contrib-concat
 * --------------------------------------------------
 */

exports.task = {
  options: {
    separator: '\n'
  },
  scripts: {
    options: {
      banner: '<%= banner.exapanded %>'
    },
    files: {
      /* Main scripts */
      '<%= path.temp %>/<%= path.scripts %>/main.js': [
        '<%= path.source %>/<%= path.scripts %>/*.js'
      ],
      /* Deferred scripts */
      '<%= path.temp %>/<%= path.scripts %>/defer.js': [
        '<%= path.source %>/<%= path.scripts %>/defer/*.js'
      ]
    }
  }
};
