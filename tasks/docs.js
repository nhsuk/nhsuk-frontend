const gulp = require('gulp')
const connect = require('gulp-connect')
const rename = require('gulp-rename')
const nunjucks = require('nunjucks')

const config = {
  baseUrl: process.env.BASE_URL ? process.env.BASE_URL : '/',
  dest: 'dist/app',
  templates: ['app/_templates', 'packages']
}

/**
 * Turn markdown into html with a nunjucks layout
 */
async function buildHTML() {
  const { nunjucksCompile } = await import('gulp-nunjucks')

  return gulp
    .src(['app/**/*.njk'])
    .pipe(
      nunjucksCompile(
        {
          // site-wide data goes here
          baseUrl: config.baseUrl
        },
        {
          env: new nunjucks.Environment(
            new nunjucks.FileSystemLoader(config.templates)
          )
        }
      )
    )
    .pipe(
      rename({
        extname: '.html'
      })
    )
    .pipe(gulp.dest(config.dest))
}

/**
 * Copy CSS from dist into the documentation directory
 */
function copyCSS() {
  return gulp.src('dist/*.css').pipe(gulp.dest(`${config.dest}/assets/`))
}

/**
 * Copy JS from dist into the documentation directory
 */
function copyJS() {
  return gulp.src('dist/*.js').pipe(gulp.dest(`${config.dest}/assets/`))
}

/**
 * Copy logos, icons and other binary assets
 */
function copyBinaryAssets() {
  return gulp
    .src('packages/assets/**/*')
    .pipe(gulp.dest(`${config.dest}/assets/`))
}

/**
 * Serve the static docs directory over localhost
 */
function serve() {
  connect.server({
    host: '0.0.0.0',
    livereload: true,
    port: 3000,
    root: config.dest
  })
}

/**
 * Reload the connect server
 */
function reload() {
  return gulp.src(config.dest).pipe(connect.reload())
}

gulp.task(
  'docs:build',
  gulp.series([copyCSS, copyJS, buildHTML, copyBinaryAssets, reload])
)

gulp.task('docs:watch', () =>
  Promise.all([
    gulp.watch(['app/**/*.njk'], buildHTML),
    gulp.watch(['dist/*.css'], copyCSS),
    gulp.watch(['dist/*.js'], copyJS),
    gulp.watch(['packages/assets/**/*'], copyBinaryAssets)
  ])
)

gulp.task('docs:serve', gulp.series([serve]))
