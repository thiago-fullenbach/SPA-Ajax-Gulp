const gulp = require('gulp')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')

function depsCSS() {
    return gulp.src('node_modules/font-awesome/css/font-awesome.css', { allowEmpty: true })
        .pipe(uglifycss({ "uglyComments": false }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/css'))
}

function depsFonts() {
    return gulp.src('node_modules/font-awesome/fonts/*.*', { allowEmpty: true })
        .pipe(gulp.dest('build/fonts'))
}

module.exports = {
    depsCSS,
    depsFonts
}