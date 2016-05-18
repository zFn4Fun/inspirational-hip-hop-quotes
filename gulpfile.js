const gulp = require('gulp');
const babel = require("gulp-babel");
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');

gulp.task('babel', () => {
    gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('uglify', () => {
    gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('htmlmin', () => {
    gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('cssnano', () => {
    gulp.src('src/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist'));
});

gulp.task('imagemin', () => {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', ['babel'], () => {
    gulp.watch("src/*.js", ['babel']);
});
