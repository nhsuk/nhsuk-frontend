const gulp = require('gulp');
const sass = require('gulp-sass');
const clean = require('gulp-clean');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const del = require('del');
const uglify = require('gulp-uglify');
const zip = require('gulp-zip');
const webpack = require('webpack-stream');
const package = require('./package.json');

/**
 * Import gulp tasks used for creating
 * our website pages.
 */
require('./tasks/docs.js');

/* Remove all compiled files */
function cleanDist() {
  return gulp.src('dist', { allowEmpty: true})
    .pipe(clean())
}

/**
 * CSS tasks
 */

/* Build the CSS from source */
function compileCSS() {
  return gulp.src(['packages/nhsuk.scss'])
    .pipe(sass())
    .pipe(gulp.dest('dist/'))
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    })
}

/* Minify CSS and add a min.css suffix */
function minifyCSS() {
  return gulp.src([
    'dist/*.css',
    '!dist/*.min.css', // don't re-minify minified css
  ])
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: `-${package.version}.min`
    }))
    .pipe(gulp.dest('dist/'))
}

/**
 * JavaScript tasks
 */

/* Use Webpack to build and minify the NHS.UK components JS. */
function webpackJS() {
  return gulp.src('./packages/nhsuk.js')
  .pipe(webpack({
    mode: 'production',
    output: {
      filename: 'nhsuk.js',
    },
    target: 'web',
    module: {
      rules: [
        {
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  }))
  .pipe(gulp.dest('./dist'));
}

/* Concat the NHS.UK components JS with third party JS (typeahead). */
function concatJS() {
  return gulp.src([
      'packages/components/header/typeahead.bundle.min.js',
      'packages/components/header/nhs.typeahead.js',
      'dist/nhsuk.js',
    ])
    .pipe(concat('nhsuk.js'))
    .pipe(gulp.dest(['dist/']));
}

/* Delete the Webpack nhsuk.bundle.js after its been concatenated. */
function cleanJS() {
  return del('dist/nhsuk.bundle.js');
}

/* Copy jQuery dependency into dist folder for release */
function thirdPartyAssets() {
  return gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(rename({
      basename: 'jquery-3.3.1.min',
    }))
    .pipe(gulp.dest('dist/'));
}

/* Minify the JS file for release */
function minifyJS() {
  return gulp.src([
    'dist/*.js',
    '!dist/*.min.js', // don't re-minify minified javascript
  ])
    .pipe(uglify())
    .pipe(rename({
      suffix: `.min`
    }))
    .pipe(gulp.dest('dist/'))
}

/* Version the JS file for release */
function versionJS() {
  return gulp.src([
    'dist/*.js',
    '!dist/*.min.js', // don't re-minify minified javascript
  ])
    .pipe(uglify())
    .pipe(rename({
      suffix: `-${package.version}.min`
    }))
    .pipe(gulp.dest('dist/'))
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

gulp.task('clean', cleanDist);
gulp.task('style', compileCSS);
gulp.task('build', gulp.series([
  compileCSS,
  webpackJS,
  concatJS,
  cleanJS,
]));
gulp.task('bundle', gulp.series([
  cleanDist,
  'build',
  minifyCSS,
  minifyJS,
  versionJS,
]))
gulp.task('zip', gulp.series([
  'bundle',
  assets,
  thirdPartyAssets,
  jsFolder,
  cssFolder,
  createZip
]));
gulp.task('watch', watch);


/**
 * The default task is to build everything, serve the docs and watch for changes
 */
gulp.task('default', gulp.series([
  cleanDist,
  'build',
  gulp.parallel(['docs:serve', watch])
]));
