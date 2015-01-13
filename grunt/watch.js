/**
 * Watch files and/or directories
 * https://github.com/gruntjs/grunt-contrib-watch
 * --------------------------------------------------
 */

exports.task = {
  options: {
    livereload: true
  },
  data: {
    files: [ '<%= path.source %>/<%= path.data %>/**/*' ],
    tasks: [ 'data' ]
  },
  fonts: {
    files: [ '<%= path.source %>/<%= path.fonts %>/**/*' ],
    tasks: [ 'fonts' ]
  },
  images: {
    files: [ '<%= path.source %>/<%= path.images %>/**/*' ],
    tasks: [ 'images' ]
  },
  media: {
    files: [ '<%= path.source %>/<%= path.media %>/**/*' ],
    tasks: [ 'media' ]
  },
  misc: {
    files: [ '<%= path.source %>/<%= path.misc %>/**/*' ],
    tasks: [ 'misc' ]
  },
  styles: {
    files: [ '<%= path.source %>/<%= path.styles %>/**/*' ],
    tasks: [ 'styles' ]
  },
  scripts: {
    files: [ '<%= path.source %>/<%= path.scripts %>/**/*' ],
    tasks: [ 'scripts' ]
  },
  vendors: {
    files: [ '<%= path.source %>/<%= path.vendors %>/**/*' ],
    tasks: [ 'vendors' ]
  },
  views: {
    files: [ '<%= path.source %>/<%= path.views %>/**/*' ],
    tasks: [ 'views' ]
  }
};
