var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var rename = require("gulp-rename");
var cleanCSS = require('gulp-clean-css');
var del = require('del');

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

function deletePublish() {
  return del('dist/**', {force:true});
}

function publishCSS() {
  return gulp.src(paths.css.frontend)
  .pipe(gulp.dest('dist/'));
}

function publishCore() {
  return gulp.src('src/globals/**/*')
  .pipe(gulp.dest('dist/packages/globals/'));
}

function publishFooter() {
  return gulp.src('src/footer/*')
  .pipe(gulp.dest('dist/packages/footer/'));
}

function publishCallout() {
  return gulp.src('src/callout/*')
  .pipe(gulp.dest('dist/packages/callout/'));
}

function publishIcons() { // Hard coded file names until we clear out the assets folder.
  return gulp.src(['app/views/partials/logos/*', 'app/views/partials/icons/icon-tick.svg', 'app/views/partials/icons/icon-cross.svg'])
  .pipe(gulp.dest('dist/assets/icons'));
}

function publishImages() { // Hard coded file names until we clear out the assets folder. (Match the above SVG icons)
  return gulp.src(['app/assets/images/nhs-logo.png', 'app/assets/images/icon-tick.png', 'app/assets/images/icon-cross.png'])
  .pipe(gulp.dest('dist/assets/images'));
}

exports.styles = styles;
exports.watch = watch;
exports.deletePublish = deletePublish;
exports.publishCSS = publishCSS;
exports.publishCore = publishCore;
exports.publishFooter = publishFooter;
exports.publishCallout = publishCallout;
exports.publishIcons = publishIcons;
exports.publishImages = publishImages

gulp.task('build', styles);
gulp.task('default', watch);
gulp.task('delete', deletePublish);
gulp.task('publish', gulp.parallel(publishCSS, publishCore, publishFooter, publishCallout, publishIcons, publishImages));
