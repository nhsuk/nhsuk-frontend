// Core dependencies
const gulp = require('gulp');

// External dependencies
const rename = require("gulp-rename");
const zip = require('gulp-zip');

// Local dependencies
const package = require('./package.json');
require('./tasks/docs.js');

/**
 * Release tasks
 */

/**
 * Copy assets such as icons and images into the distribution
 */
function assets() {
  return gulp.src('packages/assets/**')
    .pipe(gulp.dest('dist/assets/'))
}

/* Copy JS files into their relevant folders */
function jsFolder() {
  return gulp.src('dist/*.min.js', '!dist/js/nhsuk.min.js')
    .pipe(clean())
    .pipe(gulp.dest('dist/js/'));
}

/* Version the JS file for release */
function versionAssets() {
  return gulp.src(['dist/nhsuk.min.css', 'dist/nhsuk.min.js'])
    .pipe(rename({
      basename: "nhsuk",
      suffix: `-${package.version}.min`
    }))
    .pipe(gulp.dest('dist/'));
}

/* Copy CSS files into their relevant folders */

function cssFolder() {
  return gulp.src('dist/*.min.css')
    .pipe(clean())
    .pipe(gulp.dest('dist/css/'))
}

function createZip() {
  return gulp.src(['dist/css/*.min.css', 'dist/js/*.min.js', 'dist/assets/**', '!dist/js/nhsuk.min.js'], { base: 'dist' })
    .pipe(zip(`nhsuk-frontend-${package.version}.zip`))
    .pipe(gulp.dest('dist'))
}

/**
 * Development tasks
 */

/* Recompile documentation pages when there are any changes */
var watch = function() {
  gulp.watch(['packages/**/*', 'app/**/*'], gulp.series('docs:build'));
}

gulp.task('bundle', gulp.series([
  versionAssets,
]))
gulp.task('zip', gulp.series([
  'bundle',
  assets,
  jsFolder,
  cssFolder,
  createZip
]));
gulp.task('watch', watch);


/**
 * The default task is to serve the docs and watch for changes
 */
gulp.task('default', gulp.series([
  gulp.parallel(['docs:serve', watch])
]));
