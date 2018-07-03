var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

gulp.task('default',function(){
    console.log('halil güler');
});

gulp.task('html',function(){
    console.log('HTML5 is Great!');
});

gulp.task('styles',function(){
    return gulp.src('./app/styles/styles.css')
    .pipe(postcss([cssvars,nested,autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});


gulp.task('watch',function(){
    watch('./app/index.html',function(){
        gulp.start('html');
    });
    watch('./app/styles/**/*.css',function(){
        gulp.start('styles');
    });
});