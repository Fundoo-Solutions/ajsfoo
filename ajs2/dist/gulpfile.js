System.register("gulpfile", [], function($__export) {
  "use strict";
  var __moduleName = "gulpfile";
  var gulp,
      del,
      plumber,
      rename,
      traceur,
      PATHS;
  return {
    setters: [],
    execute: function() {
      gulp = require('gulp');
      del = require('del');
      plumber = require('gulp-plumber');
      rename = require('gulp-rename');
      traceur = require('gulp-traceur');
      PATHS = {
        src: {
          js: '*.js',
          html: '*.html'
        },
        lib: ['node_modules/gulp-traceur/node_modules/traceur/bin/traceur-runtime.js', 'node_modules/systemjs/dist/system-csp-production.src.js', 'node_modules/reflect-metadata/Reflect.js', 'node_modules/angular2/bundles/angular2.js', 'node_modules/angular2/bundles/http.js']
      };
      gulp.task('clean', function(done) {
        del(['dist'], done);
      });
      gulp.task('js', function() {
        return gulp.src(PATHS.src.js).pipe(rename({extname: ''})).pipe(plumber()).pipe(traceur({
          modules: 'instantiate',
          moduleName: true,
          annotations: true,
          types: true,
          memberVariables: true
        })).pipe(rename({extname: '.js'})).pipe(gulp.dest('dist'));
      });
      gulp.task('html', function() {
        return gulp.src(PATHS.src.html).pipe(gulp.dest('dist'));
      });
      gulp.task('libs', function() {
        var size = require('gulp-size');
        return gulp.src(PATHS.lib).pipe(size({
          showFiles: true,
          gzip: true
        })).pipe(gulp.dest('dist/lib'));
      });
      gulp.task('play', ['default'], function() {
        var http = require('http');
        var connect = require('connect');
        var serveStatic = require('serve-static');
        var open = require('open');
        var port = 9000,
            app;
        gulp.watch(PATHS.src.html, ['html']);
        gulp.watch(PATHS.src.js, ['js']);
        app = connect().use(serveStatic(__dirname + '/dist'));
        http.createServer(app).listen(port, function() {
          open('http://localhost:' + port);
        });
      });
      gulp.task('default', ['js', 'html', 'libs']);
    }
  };
});
