var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var rename = require("gulp-rename");
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var zip = require('gulp-zip');

// Read the package.json so that we can use its metadata such as package.version
var package = require('./package.json');


/**
 * Import gulp tasks from other files
 */
require('./tasks/docs.js');


/**
 * Remove all compiled files
 */
function cleanDist() {
  return gulp.src('dist', { allowEmpty: true})
    .pipe(clean())
}

/**
 * Build CSS from source
 */
function compileCSS() {
  return gulp.src(['packages/nhsuk.scss'])
    .pipe(sass())
    .pipe(gulp.dest('dist/'))
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    })
}

/**
 * Minify all compiled css and add a .min.css extension
 */
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
 * Compile javascript into one file
 */
function compileJS() {
  return gulp.src([
      'packages/components/header/typeahead.bundle.min.js',
      'packages/components/header/nhs.typeahead.js',
      'packages/components/header/header.js',
      'packages/components/feedback-banner/feedback-banner.js',
      'packages/components/skip-link/skip-link.js'
    ])
    .pipe(concat('nhsuk.js'))
    .pipe(gulp.dest('dist/'));
}

/**
 * Minify all javascript and add a .min.css extension
 */
function minifyJS() {
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
 * Copy assets such as icons and images into the distribution
 */
function assets() {
  return gulp.src('packages/assets/**')
    .pipe(gulp.dest('dist/assets/'))
}

/**
 * Copy 3rd party assets into the dist directory
 */
function thirdPartyAssets() {
  return gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(rename({
      basename: 'jquery-3.3.1.min',
    }))
    .pipe(gulp.dest('dist/'));
}

/**
 * Copy JS files into their relevant folders
 */

function jsFolder() {
  return gulp.src('dist/*.min.js')
    .pipe(clean())
    .pipe(gulp.dest('dist/js/'));
}

/**
 * Copy CSS files into their relevant folders
 */

function cssFolder() {
  return gulp.src('dist/*.min.css')
    .pipe(clean())
    .pipe(gulp.dest('dist/css/'))
}

function createZip() {
  return gulp.src(['dist/css/*.min.css', 'dist/js/*.min.js', 'dist/assets/**'], { base: 'dist' })
    .pipe(zip(`nhsuk-frontend-${package.version}.zip`))
    .pipe(gulp.dest('dist'))
}

/**
 * Recompile CSS, JS and docs when there are any changes
 */
var watch = function() {
  gulp.watch(['packages/**/*', 'docs/**/*'], gulp.series(['build', 'docs:build']));
}


gulp.task('clean', cleanDist);
gulp.task('style', compileCSS);
gulp.task('build', gulp.series([
  compileCSS,
  compileJS,
]));
gulp.task('bundle', gulp.series([
  cleanDist,
  'build',
  minifyCSS,
  minifyJS,
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
