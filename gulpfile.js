"use strict";

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var karma = require('karma').server;

var path = {
  css: ["css/*.css"],
  scss: ['sass/*.scss'],
  html: ['*.html'],
  js: ['js/*.js'],
  templates:['templates/*.html']
};
var compassOpt = (function () {
  var dest = 'dist/css';

  return {
    dest: dest,
    config: './config.rb',
    sass: './sass',
    css: dest
  };
})();
var compassConfig = {
  'config_file': compassOpt.config,
  sass: compassOpt.sass,
  css: compassOpt.css,
  sourcemap: true
};

// browser-sync task for starting the server.
gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: "./"
    },
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: false
    }
  });
});

gulp.plumbedSrc = function () {
  return gulp.src.apply(gulp, arguments)
    .pipe($.plumber());
};


gulp.task('script', function () {
  return gulp.plumbedSrc(path.js)
    .pipe($.angularFilesort())
    .pipe($.concat('main.js'))
    .pipe($.ngAnnotate())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('compass', function () {
  var replace = {
      patterns: []
    },
    preprocess = {context: {NODE_ENV: "DEV"}};

  return gulp.plumbedSrc(path.scss)
    .pipe($.changed(compassOpt.dest, {extension: '.scss'}))
    .pipe($.compass(compassConfig))
    .on('error',swallowError)
    .pipe($.preprocess(preprocess))
    .pipe($.replaceTask(replace))
    .pipe(gulp.dest(compassOpt.dest));
});
function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString());

  this.emit('end');
}


gulp.task('templates', function () {
  return gulp.src(path.templates)
    .pipe($.ngTemplates('app'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function () {
  gulp.watch(path.scss, ['compass', reload]);
  gulp.watch(path.js, ['script', reload]);
  gulp.watch(path.html, [reload]);
  gulp.watch(path.templates, ['templates', reload]);
});

gulp.task('default', ['compass', 'script', 'browser-sync', 'watch']);
