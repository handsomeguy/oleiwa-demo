'use strict';

const gulp = require('gulp')
const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename')
const concat = require('gulp-concat')

function compileCss() {
  return src('./components/theme-chalk/*.scss')
    .pipe(sass.sync())
    .pipe(cssmin())
    .pipe(dest('./dist/css'));
}

function compileAll() {
    return src('./components/theme-chalk/*.scss')
        .pipe(sass.sync())
        .pipe(concat('index.css'))
        .pipe(cssmin())
        // .pipe(rename({
        //     suffix: '.min'
        // }))
        .pipe(dest('./dist/css'));
}


gulp.task('css',compileCss)
gulp.task('all',compileAll)

// function copyfont() {
//   return src('./src/fonts/**')
//     .pipe(cssmin())
//     .pipe(dest('./lib/fonts'));
// }
