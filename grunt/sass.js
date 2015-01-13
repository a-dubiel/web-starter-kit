/**
 * Compile Sass
 * https://github.com/gruntjs/grunt-contrib-sass
 * --------------------------------------------------
 */

exports.task = {
  options: {
    sourcemap: 'none',
    style: 'expanded',
    banner: '<%= banner.exapanded %>'
  },
  styles: {
    src: '<%= path.source %>/<%= path.styles %>/application.scss',
    dest: '<%= path.temp %>/<%= path.styles %>/main.css'
  }
};
