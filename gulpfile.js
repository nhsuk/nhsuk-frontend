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

function publishSkiplinks() {
  return gulp.src('src/skip-links/*')
  .pipe(gulp.dest('dist/packages/skip-links/'));
}

function publishHeader() {
  return gulp.src('src/header/*')
  .pipe(gulp.dest('dist/packages/header/'));
}

function publishNavigation() {
  return gulp.src('src/navigation/*')
  .pipe(gulp.dest('dist/packages/navigation/'));
}

function publishFooter() {
  return gulp.src('src/footer/*')
  .pipe(gulp.dest('dist/packages/footer/'));
}

function publishCallout() {
  return gulp.src('src/callout/*')
  .pipe(gulp.dest('dist/packages/callout/'));
}

function publishCareCard() {
  return gulp.src('src/care-card/*')
  .pipe(gulp.dest('dist/packages/care-card/'));
}

function publishActionLink() {
  return gulp.src('src/action-link/*')
  .pipe(gulp.dest('dist/packages/action-link/'));
}

function publishReviewDate() {
  return gulp.src('src/review-date/*')
  .pipe(gulp.dest('dist/packages/review-date/'));
}

function publishImageComponent() {
  return gulp.src('src/images/*')
  .pipe(gulp.dest('dist/packages/images/'));
}

function publishIcons() { // Hard coded file names until we clear out the assets folder.
  return gulp.src(['app/views/partials/logos/*', 'app/views/partials/icons/icon-tick.svg', 'app/views/partials/icons/icon-cross.svg', 'app/views/partials/icons/icon-arrow-right-circle.svg'])
  .pipe(gulp.dest('dist/assets/icons'));
}

function publishImages() { // Hard coded file names until we clear out the assets folder. (Match the above SVG icons)
  return gulp.src(['app/assets/images/nhs-logo.png', 'app/assets/images/icon-tick.png', 'app/assets/images/icon-cross.png', 'app/assets/images/icon-arrow-right.png'])
  .pipe(gulp.dest('dist/assets/images'));
}

exports.styles = styles;
exports.watch = watch;
exports.deletePublish = deletePublish;
exports.publishCSS = publishCSS;
exports.publishCore = publishCore;
exports.publishFooter = publishFooter;
exports.publishCallout = publishCallout;
exports.publishCareCard = publishCareCard;
exports.publishActionLink = publishActionLink;
exports.publishSkiplinks = publishSkiplinks;
exports.publishImageComponent = publishImageComponent;
exports.publishReviewDate = publishReviewDate;
exports.publishIcons = publishIcons;
exports.publishImages = publishImages

gulp.task('build', styles);
gulp.task('default', watch);
gulp.task('delete', deletePublish);
gulp.task('publish', gulp.parallel(publishCSS, publishCore, publishSkiplinks, publishHeader, publishNavigation, publishFooter, publishCallout, publishCareCard, publishActionLink, publishReviewDate, publishImageComponent, publishIcons, publishImages));
