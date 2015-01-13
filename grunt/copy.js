/**
 * Copy files and/or directories
 * https://github.com/gruntjs/grunt-contrib-copy
 * --------------------------------------------------
 */

exports.task = {
  data: {
    expand: true,
    cwd: '<%= path.source %>',
    src: [ '<%= path.data %>/**/*' ],
    dest: '<%= path.build %>'
  },
  fonts: {
    expand: true,
    cwd: '<%= path.source %>',
    src: [ '<%= path.fonts %>/**/*' ],
    dest: '<%= path.build %>'
  },
  media: {
    expand: true,
    cwd: '<%= path.source %>',
    src: [ '<%= path.media %>/**/*' ],
    dest: '<%= path.build %>'
  },
  misc: {
    expand: true,
    cwd: '<%= path.source %>/<%= path.misc %>',
    src: [ '**/*' ],
    dest: '<%= path.build %>',
    dot: true
  },
  scripts: {
    expand: true,
    cwd: '<%= path.temp %>',
    src: [ '<%= path.scripts %>/**/*.js' ],
    dest: '<%= path.build %>'
  },
  styles: {
    expand: true,
    cwd: '<%= path.temp %>',
    src: [ '<%= path.styles %>/**/*.css' ],
    dest: '<%= path.build %>'
  },
  vendors: {
    expand: true,
    cwd: '<%= path.source %>',
    src: [ '<%= path.vendors %>/**/*' ],
    dest: '<%= path.build %>',
    dot: true
  },
  views: {
    expand: true,
    cwd: '<%= path.source %>/<%= path.views %>',
    src: [ '**/*' ],
    dest: '<%= path.build %>',
    dot: true
  },
};
