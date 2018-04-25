var gulp = require('gulp');
var gulpif = require('gulp-if');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var cssnano = require('gulp-cssnano');
var runSequence = require('run-sequence');

gulp.task('sass', function() {
  return gulp.src(['scss/nhsuk-frontend/nhsuk.scss', 'scss/nhsuk-design-system/styles.scss'])
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
});

// Autoprefix config browsers https://github.com/browserslist/browserslist#queries

gulp.task('autoprefix', () =>
	gulp.src('public/css/*.css')
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

gulp.task('minify', function() {
	gulp.src('public/css/*.css')
      .pipe(cssnano())
      .pipe(gulp.dest('public/css'))
});

gulp.task('watch', function() {
  gulp.watch('scss/**/**/*.scss', ['build']);
});

gulp.task('build', function (callback) {
  runSequence('sass','autoprefix', 'minify',
    callback
  )
})

gulp.task('default', ['build', 'watch']);
