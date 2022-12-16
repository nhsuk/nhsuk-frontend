const gulp = require('gulp');
const rename = require('gulp-rename');
const gulpNunjucks = require('gulp-nunjucks');
const nunjucks = require('nunjucks');
const connect = require('gulp-connect');

const config = {
  baseUrl: process.env.BASE_URL ? process.env.BASE_URL : '/',
  dest: 'dist/app',
  templates: ['app/_templates', 'packages'],
};

/**
 * Turn markdown into html with a nunjucks layout
 */
function buildHtml() {
  return gulp.src(['app/**/*.njk'])
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
    .pipe(gulp.dest(config.dest));
}

/**
 * Copy built assets from dist into the documentation directory
 */
function copyBuiltAssets() {
  return gulp.src('dist/*.{css,js}')
    .pipe(gulp.dest(`${config.dest}/assets/`));
}

/**
 * Copy logos, icons and other binary assets
 */
function copyBinaryAssets() {
  return gulp.src('packages/assets/**/*')
    .pipe(gulp.dest(`${config.dest}/assets/`));
}

/**
 * Serve the static docs directory over localhost
 */
function serve() {
  connect.server({
    host: '0.0.0.0',
    livereload: true,
    port: 3000,
    root: config.dest,
  });
}

/**
 * Reload the connect server
 */
function reload() {
  return gulp.src(config.dest)
    .pipe(connect.reload());
}

gulp.task('docs:build', gulp.series([
  copyBuiltAssets,
  buildHtml,
  copyBinaryAssets,
  reload,
]));

gulp.task('docs:serve', gulp.series([
  'docs:build',
  gulp.parallel(serve),
]));
