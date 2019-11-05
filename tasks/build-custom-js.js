/**
 * Build custom js
 */
'use strict';

const gulp = require('gulp');
const notify = require('gulp-notify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

module.exports = function (options) {

  return () => {
    return browserify({ entries: `./js/${options.mainJs}` })
      .transform('babelify', {
        presets: ['@babel/preset-env']
      })
      .bundle().on('error', notify.onError({
        title: 'JS compiling error',
        wait: true
      }))
      .pipe(source('jquery.main.js'))
      .pipe(gulp.dest(`../${options.dest}/js`));
  };

};
