var gulp = require('gulp');
var gulpif = require('gulp-if');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var runSequence = require('run-sequence');

gulp.task('sass', function() {
  return gulp.src(['src/nhsuk.scss', 'nhsuk-design-system/scss/styles.scss', 'src/ie-78.scss'])
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    })
});

// Autoprefix config browsers https://github.com/browserslist/browserslist#queries

gulp.task('autoprefix', () =>
	gulp.src('assets/css/*.css')
		.pipe(autoprefixer({
			browsers: [
        'last 2 versions',
        'Firefox > 20',
        'ie 8-10'
      ],
			cascade: false
		}))
		.pipe(gulp.dest('assets/css'))
);

gulp.task('minify', function() {
	gulp.src('assets/css/*.css')
      .pipe(cssnano())
      .pipe(gulp.dest('assets/css'))
});

gulp.task('watch', function() {
  gulp.watch(['src/**/*.scss', 'nhsuk-design-system/scss/**/*.scss'], ['build']);
});

gulp.task('build', function (callback) {
  runSequence('sass','autoprefix', 'minify',
    callback
  )
})

gulp.task('default', ['build', 'watch']);
