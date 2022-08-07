const gulp = require('gulp');

const gulpSass = require('gulp-sass');

const sass = gulpSass(require('sass'));

// gulp.task('comileSass',async function(){
//     gulp.watch('src/*.scss', async function(){
//         gulp.src('src/*.scss').pipe(sass()).pipe(gulp.dest('src/css'));
//     })
// })

gulp.task('comileSass', async function () {
    gulp.watch('src/components/**/*.scss', async function () {
        gulp.src('src/components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'));
    });
})