// Gulp
const gulp = require('gulp');

// Node packages
const browserSync = require('browser-sync').create();

gulp.task('default', () => {
  browserSync.init({
    server: {
      baseDir: "src"
    }
  });
});
