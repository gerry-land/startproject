var gulp = require(`gulp`);
var sass = require(`gulp-sass`); 
var browser = require(`browser-sync`);



gulp.task(`sass`, async function(){
  return gulp.src(`app/css/style.css`)
    .pipe(sass())
    .pipe(gulp.dest(`dist`))
    .pipe(browser.reload({stream: true}))
})

gulp.task(`script`, async function(){
  return gulp.src(`app/js/index.js`)
    .pipe(gulp.dest(`dist`))
    .pipe(browser.reload({stream: true}))
})

gulp.task(`browser`, async function(){
  browser({
    server: {
      baseDir: `dist`
    },
    notify: false 
  })
})

gulp.task(`watch`, function(){
  gulp.watch(`app/css/style.css`, gulp.parallel(`sass`));
  gulp.watch(`app/js/index.js`, gulp.parallel(`script`));
})

gulp.task(`default`, gulp.parallel(`sass`, `script`, `browser`, `watch`))