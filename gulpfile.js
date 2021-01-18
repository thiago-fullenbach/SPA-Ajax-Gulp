const gulp = require('gulp')
const { series, parallel } = gulp

const { appHTML, appCSS, appJS, appIMG } = require('./assets/gulpTasks/app')
const { depsCSS, depsFonts } = require('./assets/gulpTasks/deps')
const { servidor, monitorarArquivos } = require('./assets/gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)