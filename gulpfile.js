var gulp = require('gulp'),
    webServer = require('gulp-webserver');


gulp.task('serve', function(){
    gulp.src('.')
    .pipe(webServer({}))
})