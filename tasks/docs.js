var gulp = require('gulp');

var rename = require('gulp-rename');
var gulpNunjucks = require('gulp-nunjucks');
var nunjucks = require('nunjucks');
var nunjucksMd = require('gulp-nunjucks-md');
var connect = require('gulp-connect');
var markdown = require('gulp-markdown');
var wrap = require('gulp-wrap');
var replace = require('gulp-replace');
var open = require('gulp-open');

var metalsmithBuild = require('../site/_build/index.js')

var config = {
  templates: ['site/_layouts', 'packages'],
  dest: 'dist/docs',
  baseUrl: process.env.BASE_URL ? process.env.BASE_URL : '',
}

/**
 * Turn templates into html with a nunjucks
 */
function buildHtml() {
  return gulp.src(['site/**/*.njk'])
    .pipe(gulpNunjucks.compile({
      // site-wide data goes here
      baseUrl: config.baseUrl,
    }, {
      env: new nunjucks.Environment(
        new nunjucks.FileSystemLoader(config.templates)
      ),
    }))
    .pipe(rename({
      extname: '.html',
    }))
    .pipe(gulp.dest(config.dest))
}

/**
 * Use metalsmith to turn github-style docs into html
 */
function buildDocs(done) {
  metalsmithBuild.markdownDocs(done)
}

/**
 * Copy built assets from dist into the documentation directory
 */
function copyBuiltAssets() {
  return gulp.src('dist/*.{css,js}')
    .pipe(gulp.dest(config.dest + '/assets/'))
}

/**
 * Copy logos, icons and other binary assets
 */
function copyBinaryAssets() {
  return gulp.src('packages/assets/**/*')
    .pipe(gulp.dest(config.dest + '/assets/'))
}

/**
 * Copy 3rd party dependencies
 */
function copyThirdParty() {
  return gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest(config.dest + '/assets/libraries/'))
}

/**
 * Serve the static docs directory over localhost
 */
function serve() {
  connect.server({
    root: config.dest,
    livereload: true,
    port: 3000,
  });
}

/**
 * Open a browser to show the docs
 */
function openBrowser() {
  gulp.src(__filename)
    .pipe(open({
      uri: 'http:localhost:3000',
    }));
}

/**
 * Reload the connect server
 */
function reload() {
  return gulp.src(config.dest)
    .pipe(connect.reload())
}


gulp.task('docs:build', gulp.series([
  copyBuiltAssets,
  buildHtml,
  buildDocs,
  copyBinaryAssets,
  copyThirdParty,
  reload,
]));
gulp.task('docs:serve', gulp.series([
  'docs:build',
  gulp.parallel([serve, openBrowser])
]));
