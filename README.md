# Web Starter Kit
Starter kit for an automated front-end web development.

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

---

## Table of contents

+ Prerequisites
+ Implementation
    + Download
    + Project information
    + Cleanup directories
    + Local server
    + NPM dependencies
+ Development
    + Initial build
    + Start local server
    + Vendors
    + Polyfills
    + Deferred JavaScript
    + Sass
    + Meta images
    + Miscellaneous files
    + Documentation
    + Reports
    + Individual Grunt tasks

---

## Prerequisites

If you haven't done it before, please install the following prerequisites:

* [Node.js & NPM](http://nodejs.org/)
* [Ruby](http://rubyinstaller.org/) - Windows users only
* [PHP](http://php.net/manual/en/install.windows.php) - Windows users only
* [Grunt](http://gruntjs.com/)
* [Sass](http://sass-lang.com/)
* [Sass Lint](https://github.com/causes/scss-lint)

*Note: You need to install these prerequisites only once on your workstation and update when necessary.*

---

## Implementation

In order to succesfully setup your development environment, please carefully follow each step below.

### Download

Download [latest version of master branch](https://github.com/KrisOlszewski/web-starter-kit/archive/master.zip) and unpack it on your local machine. Copy all contents (including hidden files) to your project directory.

### Project information

Update `package.json` file according to your project specifications. That includes `name`, `title`, `description`, `contributors`, etc.

### Cleanup directories

Remove any unused directories and/or files based on your project specifications. In example, if your project does NOT use videos, audio, or custom fonts, then please remove `source/media` and `source/fonts` directories. Also, please remove any placeholder files such as `source/images/sample-svg-file.svg`. These files are used only as dummy placeholders.

### Local server

By default the project uses Node.js server for static HTML files. If your project needs to use PHP, then please modify `server` and `views` tasks in `Gruntfile.js`. Additionally, remove static or dynamic files from `source/views` accordingly.

### NPM dependencies

In terminal, go to your projct directory and run `npm cache clear` and `npm install`.

---

## Development

You can start working on your project inside the `source` directory. Current structure is just a strong recommendation and if your project needs a custom build then do whatever it is necessary to achieve its objective. Keep in mind that the directory names within `source` directory match Grunt path variables. In example, if you want to change `styles` directory to `css`, the you have to update it in `path.styles` wihtin `Gruntfile.js`.

### Directory structure

+ `/build` - production code, local server points here
+ `/docs`
    + `/js` - JavaScript documentation using Dox
    + `/sass` - Sass documentation using SassDoc
+ `/node_modules`
+ `/reports` - code reports with errors and warnings
+ `/source` - development code
    + `/data` - dynamic data files, such as JSON or XML
    + `/fonts` - self-hosted custom web fonts
    + `/images`
    + `/media` - static files, such as video, audio, or PDF
    + `/misc` - miscellaneous files, such as .htaccess, crossdomain.xml, or robots.txt
    + `/scripts`
        + `/defer` - defer JavaScript after page load
    + `/styles`
        + `/components`
        + `/core`
        + `/utilities`
    + `/vendors`
    + `/views`

### Initial build

In terminal, go to your project directory and run `grunt build`. If you see an error message it means you've messed up something. Go back and fix it.

### Start local server

In terminal, go to your project directory and run `grunt server`. From now on you can work within `source` directory and any changes will be automatically reloaded in your browser. However, if you add new directories, then you have to reload local server, so the watch task can acknowledge your changes.

### Vendors

It is up to you to add vendors per project requirements and link to them from views. Feel free to use Bower for your dependencies.

**Recommended vendors**
* [Normalize](http://necolas.github.io/normalize.css/)
* [jQuery](http://jquery.com/)
* [Velocity](http://julian.com/research/velocity/)
* [Slick](http://kenwheeler.github.io/slick/)
* [Fancybox](http://fancyapps.com/fancybox/)

### Polyfills

It is up to you to add polyfills per project requirements and link to them from views. Feel free to use Bower for your dependencies.

**Recommended vendors**
* [Respond](https://github.com/scottjehl/Respond)
* [Selectvizr](http://selectivizr.com/)
* [Modernizr](http://modernizr.com/)

### Deferred JavaScript

To optimize performance of your project you can add scripts after the page is loaded. This technique becomes useful when you want to defer social media scripts, images and/or videos, Google Analytics, etc.

### Sass

Project templates comes with a standard and opinionated structure. It is up to you to follow it or completely ignore it. Please keep in mind that the Sass task will validate your code against Sass Lint and fail the build if your code is not up to standard. You can always edit Sass Lint configuration in `.scss-lint.yml`. Additionally, Sass comments follow specific syntax in order to create SassDoc documentation. Hence, if you fail do comment your code, you will not be able to generate Sass documentation.

### Meta images

Project template comes with standard meta images, such as favicon, apple touch image, Microsoft tiles, etc. Please replace them accordingly to project creative.

### Miscellaneous images

Project template comes with standard root files, such as .htaccess, robots.txt, or crossdomain.xml You can add, remove, or edit them accordingly to your project specifications.

### Documentation

`grunt docs:scripts` and `grunt docs:styles` will create documentation files. You can find them in `docs` directory.

### Reports

`grunt styles` and `grunt views` will create reports after linting/validating files. You can find them in `reports` directory.

### Individual Grunt tasks

Each task is self-explanatory. For more information please look inside `Gruntfile.js`.

* `grunt data`
* `grunt docs` - will execute both `grunt docs:scripts` and `grunt docs:styles`
* `grunt docs:scripts`
* `grunt docs:styles`
* `grunt fonts`
* `grunt images`
* `grunt media`
* `grunt misc`
* `grunt scripts`
* `grunt styles`
* `grunt vendors`
* `grunt views`
