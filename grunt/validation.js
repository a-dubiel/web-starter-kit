/**
 * Validate HTML
 * https://github.com/praveenvijayan/grunt-html-validation
 * --------------------------------------------------
 */

exports.task = {
  options: {
    reset: true,
    path: '<%= path.reports %>/html-status.json',
    reportpath: '<%= path.reports %>/html-report.json'
  },
  views: {
    src: '<%= path.source %>/<%= path.views %>/**/*.html'
  }
};
