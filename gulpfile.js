
let gulp = require('gulp');
let sass = require('gulp-sass');



gulp.task('compile',function(){
    gulp.src('./src/sass/*.scss')

        .pipe(sass({outputStyle:'expanded'}))
        .pipe(gulp.dest('./src/css'))
});

gulp.task('automatic',function(){

    gulp.watch('./src/sass/*.scss',['compile']);
});



