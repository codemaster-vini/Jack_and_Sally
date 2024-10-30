const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compilaSass() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sass( { outputStyle: 'compressed' }))
        .pipe(gulp.dest('./build/styles'));
};

function comprimeImagem() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
};


function compilaJs() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
};


exports.comprimir = comprimeImagem;
exports.default = function() {
    gulp.watch('./source/styles/*.scss', gulp.parallel(compilaSass));
    gulp.watch('./source/scripts/*.js', gulp.parallel(compilaJs));
};