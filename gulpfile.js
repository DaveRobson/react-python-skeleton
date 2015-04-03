'use strict';

// requirements

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var size = require('gulp-size');
var clean = require('gulp-clean');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');

// Define some paths.
var paths = {
    css: ['static/css/*.sass'],
    app_js: ['./app/ui/index.jsx'],
    js: ['static/js/*.js']
};

// tasks

gulp.task('transform', ['clean'], function () {

    gulp.src(paths.app_js, { read: false })
    .pipe(browserify({
            transform: ['reactify'],
            extensions: ['.jsx']
        })
    )
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./app/static/js'));

});

gulp.task('clean', function () {
  return gulp.src(['./app/static/js/*'], {read: false})
    .pipe(clean());
});

gulp.task('default', function () {
  gulp.start('transform');
  gulp.watch('./app/ui/index.jsx', ['transform']);
});