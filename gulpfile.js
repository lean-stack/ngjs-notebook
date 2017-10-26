// Gulp
const gulp = require('gulp');

// Node packages
const browserSync = require('browser-sync').create();

gulp.task('default', () => {
  browserSync.init({
    server: {
      baseDir: "src",
      routes: {
        "/node_modules": "node_modules"
      }
    }
  });

  gulp.watch("src/**/*.html").on('change', browserSync.reload);
});
