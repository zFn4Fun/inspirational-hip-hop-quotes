const gulp = require('gulp');
const del = require('del');
const babel = require("gulp-babel");
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');

gulp.task('clean', () => {
    del(['dist/*',]);
});

gulp.task('compressjs', () => {
    gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('compresshtml', () => {
    gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('compresscss', () => {
    gulp.src('src/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist'));
});

gulp.task('compressimg', () => {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('default', ['clean', 'compressjs', 'compresshtml', 'compresscss',
    'compressimg']);

gulp.task('watch', ['default'], () => {
    gulp.watch('src/*.js', ['compressjs']);
    gulp.watch('src/*.html', ['compresshtml']);
    gulp.watch('src/*.css', ['compresscss']);
    gulp.watch('src/img/*', ['compressimg']);
});
