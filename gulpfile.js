var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var rename = require("gulp-rename");
var cleanCSS = require('gulp-clean-css');

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

function watch() {
  gulp.watch('src/**/*.scss', styles);
}

exports.styles = styles;
exports.watch = watch;

gulp.task('build', styles);
gulp.task('default', watch);
