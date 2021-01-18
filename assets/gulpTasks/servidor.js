const gulp = require('gulp')
const server = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor() {
    return gulp.src('build')
        .pipe(server({
            port: 8083,
            open: true,
            livereload: true
        }))
}

function monitorarArquivos(callback) {
    watch('assets/html/**/*.html', () => gulp.series('appHTML')())
    watch('assets/css/**/*.css', () => gulp.series('appCSS')())
    watch('assets/js/**/*.js', () => gulp.series('appJS')())
    watch('assets/imgs/**/*.*', () => gulp.series('appIMG')())

    return callback()
}

module.exports = {
    servidor,
    monitorarArquivos
}