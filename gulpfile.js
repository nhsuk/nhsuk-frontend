var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var rename = require("gulp-rename");
var cleanCSS = require('gulp-clean-css');

var paths = {
  scss: {
    frontend: 'src/nhsuk.scss',
    design: 'app/styles/styles.scss',
    ie: 'src/ie-78.scss'
  },
  css: {
    folder: 'app/assets/css',
    file: 'app/assets/css/*.css',
    frontend: 'app/assets/css/nhsuk.min.css'
  },
  collection: {
    frontend: 'src/**/*.scss',
    design: 'app/styles/**/*.scss'
  }
}

function styles() {
  return gulp.src([paths.scss.frontend, paths.scss.design, paths.scss.ie])
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.css.folder))
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    })
}

function watch() {
  gulp.watch([paths.collection.frontend, paths.collection.design], styles);
}

exports.styles = styles;
exports.watch = watch;

gulp.task('build', styles);
gulp.task('default', watch);
