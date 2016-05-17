const gulp = require('gulp');
const babel = require("gulp-babel");
// const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

gulp.task('babel', () => {
    gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});
/* Need to install uglif-js it seems, for this to work.
gulp.task('uglify', () => {
    gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
*/

gulp.task('imagemin', () => {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', ['babel'], () => {
    gulp.watch("src/*.js", ['babel']);
});
