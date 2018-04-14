var gulp = require('gulp');
var gulpif = require('gulp-if');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
  return gulp.src('scss/nhsuk/nhsuk.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
});

// Autoprefix config browsers https://github.com/browserslist/browserslist#queries

gulp.task('autoprefix', () =>
	gulp.src('public/css/nhsuk.css')
		.pipe(autoprefixer({
			browsers: [
        'last 2 versions',
        'Firefox > 20',
        'ie 8-10'
      ],
			cascade: false
		}))
		.pipe(gulp.dest('public/css'))
);

gulp.task('watch', function() {
  gulp.watch('scss/nhsuk/**/*.scss', ['sass']);
});

gulp.task('build', ['sass', 'autoprefix']);
gulp.task('default', ['build', 'watch']);
