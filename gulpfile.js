var gulp = require('gulp');
var sass = require('gulp-sass'); 
var browser = require('browser-sync');
var postCss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var htmlInclude = require('gulp-lb-include');
var clean = require('gulp-clean');

// handle html
gulp.task('html', function () {
  return gulp.src('app/index.html')
    .pipe(htmlInclude())
    .pipe(gulp.dest('public/'))
    .pipe(browser.reload({stream: true}))
});

// handle styles
gulp.task('styles', async function() {
  return gulp.src('./app/scss/index.scss', {
            sourcemaps: true
          })
    .pipe(sass())
    .pipe(postCss([autoprefixer()]))
    .pipe(gulp.dest('public'))
    .pipe(browser.reload({stream: true}))
});

// handle scripts
gulp.task('script', async function() {
  return gulp.src('app/js/index.js')
    .pipe(gulp.dest('public'))
    .pipe(browser.reload({stream: true}))
});

// run local server for developing
gulp.task('browser', async function() {
  browser({
    server: {
      baseDir: 'public'
    },
    notify: false 
  })
});

// handle files
gulp.task('copy', async function () {
  return gulp.src('app/images/**')
    .pipe(gulp.dest('public/images'))
});

// handle files
gulp.task('copyFonts', async function () {
  return gulp.src('app/fonts/**')
    .pipe(gulp.dest('public/fonts'))
});

gulp.task('clean', function() {
  return gulp.src('public', {read: false, allowEmpty: true})
    .pipe(clean({force: true}))
});

// enable watch to run bundle after some changes
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', gulp.parallel('styles'));
  gulp.watch('app/js/index.js', gulp.parallel('script'));
  gulp.watch('app/**/*.html', gulp.parallel('html'));
  gulp.watch('app/images/**', gulp.parallel('copy'));
  gulp.watch('app/fonts/**', gulp.parallel('copyFonts'));

})

// init default gulp task
gulp.task('default', gulp.parallel('styles', 'script', 'html', 'copy', 'copyFonts', 'browser', 'watch'));
