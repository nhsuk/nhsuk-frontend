const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const zip = require('gulp-zip');
const package = require('./package.json');

/**
 * Import gulp tasks used for creating
 * our website pages.
 */
require('./tasks/docs.js');

/**
 * CSS tasks
 */

/* Build the CSS from source */
function compileCSS() {
  return gulp.src(['packages/nhsuk.scss'])
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: ".min",
    }))
    .pipe(gulp.dest('dist/'))
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    })
}

/**
 * Assets tasks
 */

/**
 * Copy assets such as icons and images into the distribution
 */
function assets() {
  return gulp.src('packages/assets/**')
    .pipe(gulp.dest('dist/assets/'))
}

/**
 * Release tasks
 */

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

/* Recompile CSS, JS and docs when there are any changes */
var watch = function() {
  gulp.watch(['packages/**/*', 'app/**/*'], gulp.series(['build', 'docs:build']));
}

gulp.task('style', compileCSS);
gulp.task('build', gulp.series([
  compileCSS
]));
gulp.task('bundle', gulp.series([
  'build',
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
 * The default task is to build everything, serve the docs and watch for changes
 */
gulp.task('default', gulp.series([
  'build',
  gulp.parallel(['docs:serve', watch])
]));
