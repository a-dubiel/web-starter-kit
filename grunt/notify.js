/**
 * Task status notification
 * https://github.com/dylang/grunt-notify
 * --------------------------------------------------
 */

exports.task = {
  build: {
    options: {
      title: '<%= pkg.title %>',
      message: 'Build completed!'
    }
  },
  data: {
    options: {
      title: '<%= pkg.title %>',
      message: 'Data task completed!'
    }
  },
  docs: {
    options: {
      title: '<%= pkg.title %>',
      message: 'Documentation completed!'
    }
  },
  fonts: {
    options: {
      title: '<%= pkg.title %>',
      message: 'Fonts task completed!'
    }
  },
  images: {
    options: {
      title: '<%= pkg.title %>',
      message: 'Images task completed!'
    }
  },
  media: {
    options: {
      title: '<%= pkg.title %>',
      message: 'Media task completed!'
    }
  },
  misc: {
    options: {
      title: '<%= pkg.title %>',
      message: 'Misc task completed!'
    }
  },
  scripts: {
    options: {
      title: '<%= pkg.title %>',
      message: 'Scripts task completed!'
    }
  },
  server: {
    options: {
      title: '<%= pkg.title %>',
      message: 'Server was started!'
    }
  },
  styles: {
    options: {
      title: '<%= pkg.title %>',
      message: 'Styles task completed!'
    }
  },
  vendors: {
    options: {
      title: '<%= pkg.title %>',
      message: 'Vendors task completed!'
    }
  },
  views: {
    options: {
      title: '<%= pkg.title %>',
      message: 'Views task completed!'
    }
  }
};
