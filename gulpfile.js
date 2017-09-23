const gulp = require('gulp'),
  mocha = require('gulp-mocha'),
  gutil = require('gulp-util');


gulp.task('default', () => console.log("Gulp is working"));

//////////////////////////////////////////////////
//// TESTS
//////////////////////////////////////////////////

gulp.task('test_data_structures', () => {
  return gulp.src('./data-structures/**/*.spec.js', { read: false })
    .pipe(mocha({ reporter: 'list' }))
    .on('error', gutil.log);
});


//////////////////////////////////////////////////
//// WATCHERS
//////////////////////////////////////////////////

gulp.task('tdd_ds', ['test_data_structures'], () => {
  gulp.watch(['./data-structures/**/*.js', './data-structures/**/*.spec.js'], ['test_data_structures']);
});
