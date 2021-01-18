const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const htmlmin = require('gulp-htmlmin')

function appHTML() {
    return gulp.src('assets/html/**/*.html', { allowEmpty: true })
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'))
}

function appCSS() {
    return gulp.src('assets/css/**/*.css', { allowEmpty: true })
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('build/css'))
}

function appJS() {
    return gulp.src('assets/js/**/*.js', { allowEmpty: true })
        .pipe(babel({
            comments: false,
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/js'))
}

function appIMG() {
    return gulp.src('assets/imgs/**/*.*', { allowEmpty: true })
        .pipe(gulp.dest('build/imgs'))
}

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}