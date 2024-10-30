const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

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
        .pipe(obfuscate())
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
};


exports.default = gulp.series(compilaSass, compilaJs, comprimeImagem);