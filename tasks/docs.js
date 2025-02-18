const { mkdir, writeFile } = require('fs/promises')
const { join, parse } = require('path')

const { glob } = require('glob')
const gulp = require('gulp')
const connect = require('gulp-connect')
const nunjucks = require('nunjucks')

// Base URL is overridden for `npm run build-gh-pages`
const { BASE_URL = '/' } = process.env

/**
 * Compile Nunjucks into HTML
 */
async function buildHTML() {
  const paths = await glob('**/*.njk', {
    cwd: 'app',
    nodir: true
  })

  // Configure Nunjucks
  const env = nunjucks.configure(['app', 'app/_templates', 'packages'], {
    trimBlocks: true,
    lstripBlocks: true
  })

  for (const path of paths) {
    const { name, dir } = parse(path)

    const html = env.render(path, {
      baseUrl: BASE_URL
    })

    const destPath = join('dist/app', dir)
    const filePath = join(destPath, `${name}.html`)

    // Write to disk
    await mkdir(destPath, { recursive: true })
    await writeFile(filePath, html)
  }
}

/**
 * Copy CSS from dist into the documentation directory
 */
function copyCSS() {
  return gulp.src('dist/*.css').pipe(gulp.dest('dist/app/assets'))
}

/**
 * Copy JS from dist into the documentation directory
 */
function copyJS() {
  return gulp.src('dist/*.js').pipe(gulp.dest('dist/app/assets'))
}

/**
 * Copy logos, icons and other binary assets
 */
function copyBinaryAssets() {
  return gulp.src('packages/assets/**/*').pipe(gulp.dest('dist/app/assets'))
}

/**
 * Serve the static docs directory over localhost
 */
function serve() {
  connect.server({
    host: '0.0.0.0',
    livereload: true,
    port: 3000,
    root: 'dist/app'
  })
}

/**
 * Reload the connect server
 */
function reload() {
  return gulp.src('dist/app').pipe(connect.reload())
}

gulp.task(
  'docs:build',
  gulp.series([copyCSS, copyJS, copyBinaryAssets, buildHTML, reload])
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

/**
 * @import { Result } from 'html-validate'
 */
