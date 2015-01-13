/**
 * Local server
 * https://github.com/gruntjs/grunt-contrib-connect
 * --------------------------------------------------
 */

exports.task = {
  static: {
    options: {
      port: 8000,
      livereload: true,
      hostname: 'localhost',
      base: '<%= path.build %>',
      open: {
        target: 'http://localhost:8000/'
      }
    }
  },
  dynamic: {
    options: {
      port: 8000,
      livereload: true,
      hostname: 'localhost',
      base: '<%= path.build %>',
      open: {
        target: 'http://localhost:8000/'
      },
      middleware: function(connect, options) {
        var middlewares = [];
        var directory = options.directory || options.base[options.base.length - 1];
        if (!Array.isArray(options.base)) {
          options.base = [options.base];
        }
        middlewares.push(phpMiddleware(directory));
        options.base.forEach(function(base) {
          middlewares.push(connect.static(base));
        });
        middlewares.push(connect.directory(directory));
        return middlewares;
      }
    }
  }
};
