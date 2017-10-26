// Gulp
const gulp = require('gulp');

// Gulp plugins
const inject = require('gulp-inject');
const ngSort = require('gulp-angular-filesort');

// Node packages
const browserSync = require('browser-sync').create();
const log         = require('connect-logger');

// Config
const paths = {
  scripts: 'src/**/*.js'
}

// Tasks
gulp.task('default', () => {
  browserSync.init({
    server: {
      baseDir: 'src',
      routes: {
        '/node_modules': 'node_modules'
      },
      middleware: [
        log({ format: '%date %status %method %url' })
      ]
    }
  });

  gulp.watch('src/**/*.html').on('change', browserSync.reload);
  gulp.watch(paths.scripts, ['inject']);
});

gulp.task('inject', () => {
  const scripts = gulp.src(paths.scripts).pipe(ngSort());
  gulp.src('src/index.html')
    .pipe(inject(scripts, {relative: true}))
    .pipe(gulp.dest('src'));
});
