var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

function styles() {
  return gulp.src(['src/nhsuk.scss', 'src/nhsuk-ie-78.scss'])
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('src/'))
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    })
}

function scripts() {
  return gulp.src([
      'src/components/header/typeahead.bundle.min.js', 
      'src/components/header/nhs.typeahead.js', 
      'src/components/header/header.js',
      'src/components/feedback-banner/feedback-banner.js'
    ])
    .pipe(concat('nhsuk.js'))
    .pipe(gulp.dest('src/'));
}

function watch() {
  gulp.watch('src/**/*.scss', styles);
}

exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;

gulp.task('build', styles);
gulp.task('default', watch);
gulp.task('bundle', scripts);
