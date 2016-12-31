const gulp = require('gulp'),
      mocha = require('gulp-mocha'),
      gutil = require('gulp-util');


gulp.task('default', () => console.log("Gulp is working"));

//////////////////////////////////////////////////
//// TESTS
//////////////////////////////////////////////////

gulp.task('test_eloquent', () => {
    return gulp.src('./EloquentJS/spec/*.spec.js', { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});


//////////////////////////////////////////////////
//// WATCHERS
//////////////////////////////////////////////////

gulp.task('tdd_eloquent', ['test_eloquent'], () => {
    gulp.watch(['./EloquentJS/code/*.js', './EloquentJS/spec/*.spec.js'], ['test_eloquent']);
});