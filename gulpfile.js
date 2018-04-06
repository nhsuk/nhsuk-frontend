var gulp = require('gulp');
var gulpif = require('gulp-if');
var argv = require('yargs').argv;
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
  return gulp.src('scss/nhsuk/nhsuk.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulpif(argv.production, csso()))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
  gulp.watch('scss/nhsuk/**/*.scss', ['sass']);
});

gulp.task('build', ['sass']);
gulp.task('default', ['build', 'watch']);
