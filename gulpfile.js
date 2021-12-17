const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const zip = require('gulp-zip');
const webpack = require('webpack-stream');
const { version } = require('./package.json');

/**
 * Import gulp tasks used for creating
 * our website pages.
 */
require('./tasks/docs.js');

/* Remove all compiled files */
function cleanDist() {
  return gulp.src('dist', { allowEmpty: true })
    .pipe(clean());
}

/**
 * CSS tasks
 */

sass.compiler = require('sass');

/* Build the CSS from source */
function compileCSS() {
  return gulp.src(['packages/nhsuk.scss'])
    .pipe(sass())
    .pipe(gulp.dest('dist/'))
    .on('error', (err) => {
      console.log(err);
      process.exit(1);
    });
}

/* Minify CSS and add a min.css suffix */
function minifyCSS() {
  return gulp.src([
    'dist/*.css',
    '!dist/*.min.css', // don't re-minify minified css
  ])
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: `-${version}.min`,
    }))
    .pipe(gulp.dest('dist/'));
}

/**
 * JavaScript tasks
 */

/* Use Webpack to build and minify the NHS.UK components JS. */
function webpackJS() {
  return gulp.src('./packages/nhsuk.js')
    .pipe(webpack({
      mode: 'production',
      module: {
        rules: [
          {
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
        ],
      },
      output: {
        filename: 'nhsuk.js',
      },
      target: 'web',
    }))
    .pipe(gulp.dest('./dist'));
}

/* Minify the JS file for release */
function minifyJS() {
  return gulp.src([
    'dist/*.js',
    '!dist/*.min.js', // don't re-minify minified javascript
  ])
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(gulp.dest('dist/'));
}

/* Version the JS file for release */
function versionJS() {
  return gulp.src([
    'dist/*.js',
    '!dist/*.min.js', // don't re-minify minified javascript
  ])
    .pipe(uglify())
    .pipe(rename({
      suffix: `-${version}.min`,
    }))
    .pipe(gulp.dest('dist/'));
}

/**
 * Assets tasks
 */

/**
 * Copy assets such as icons and images into the distribution
 */
function assets() {
  return gulp.src('packages/assets/**')
    .pipe(gulp.dest('dist/assets/'));
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
    .pipe(gulp.dest('dist/css/'));
}

function createZip() {
  return gulp.src(['dist/css/*.min.css', 'dist/js/*.min.js', 'dist/assets/**', '!dist/js/nhsuk.min.js'], { base: 'dist' })
    .pipe(zip(`nhsuk-frontend-${version}.zip`))
    .pipe(gulp.dest('dist'));
}

/**
 * Development tasks
 */

/* Recompile CSS, JS and docs when there are any changes */
function watch() {
  gulp.watch(['packages/**/*', 'app/**/*'], gulp.series(['build', 'docs:build']));
}

gulp.task('clean', cleanDist);

gulp.task('style', compileCSS);

gulp.task('build', gulp.series([
  compileCSS,
  webpackJS,
]));

gulp.task('bundle', gulp.series([
  cleanDist,
  'build',
  minifyCSS,
  minifyJS,
  versionJS,
]));

gulp.task('zip', gulp.series([
  'bundle',
  assets,
  jsFolder,
  cssFolder,
  createZip,
]));

gulp.task('watch', watch);

/**
 * The default task is to build everything, serve the docs and watch for changes
 */
gulp.task('default', gulp.series([
  cleanDist,
  'build',
  gulp.parallel(['docs:serve', watch]),
]));
