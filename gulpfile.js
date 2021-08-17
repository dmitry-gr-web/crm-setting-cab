const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync'); // Подключаем Browser Sync
const ssi = require('browsersync-ssi'); // Подключаем Browser Sync
const buildssi = require('gulp-ssi');
const concat = require('gulp-concat'); // Подключаем gulp-concat (для конкатенации файлов)
const uglify = require('gulp-uglifyjs'); // Подключаем gulp-uglifyjs (для сжатия JS)
const cssnano = require('gulp-cssnano'); // Подключаем пакет для минификации CSS
const rename = require('gulp-rename'); // Подключаем библиотеку для переименования файлов
const del = require('del'); // Подключаем библиотеку для удаления файлов и папок
const autoprefixer = require('gulp-autoprefixer'); // Подключаем библиотеку для автоматического добавления префиксов
const fileinclude = require('gulp-file-include');
const rigger = require('gulp-rigger');

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app/', // Директория для сервера - app
            middleware: ssi({ baseDir: 'app/', ext: '.html' })
        },
        // tunnel: 'loh459',
        notify: false // Отключаем уведомления
    });
});
gulp.task('sass', function() { // Создаем таск "sass"
    return gulp.src('app/sass/*.+(scss|sass)') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({ stream: true })) // Обновляем CSS на странице при изменении
});

// gulp.task('css-libs', function() {
//     return gulp.src('app/sass/libs.scss') // Выбираем файл для минификации
//         .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
//         .pipe(cssnano()) // Сжимаем
//         .pipe(rename({ suffix: '.min' })) // Добавляем суффикс .min
//         .pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
// });


gulp.task('scripts', function() {
    return gulp.src(['app/js/*.js'])
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('code', function() {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
});
gulp.task('blockcode', function() {
    return gulp.src('app/template/*.html')
        .pipe(browserSync.reload({ stream: true }))
});
// gulp.task('html', function() {
//     gulp.src(path.watch.html)
//         .pipe(rigger())
//         .pipe(gulp.dest(path.build.html))
//         .pipe(browserSync.reload({ stream: true }));
// });
// gulp.task('rigg', function() {
//     gulp.src('app/templates/suka.html')
//         .pipe(rigger())
//         .pipe(gulp.dest('app/index.html'))
//         .pipe(browserSync.reload({ stream: true }));
// });
// gulp.task('scripts', function() {
//     return gulp.src([ // Берем все необходимые библиотеки
//             'app/libs/jquery/dist/jquery.min.js', // Берем jQuery
//             'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js' // Берем Magnific Popup
//         ])
//         .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
//         .pipe(uglify()) // Сжимаем JS файл
//         .pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
// });

// gulp.task('html', function() {
//     gulp.src(src.html)
//         .pipe(rigger())
//         .pipe(gulpIf(env !== 'dev', minifyHTML()))
//         .pipe(gulp.dest(outputDir))
//         .pipe(connect.reload())
// });

// gulp.task('rig', function() {
//     gulp.src('app/template/*.html')
//         .pipe(rigger())
//         .pipe(gulp.dest('app/*.html'));
// });

// gulp.task('clean', async function() {
//     return del.sync('dist'); // Удаляем папку dist перед сборкой
// });
// gulp.task('clear', function(callback) {
//     return cache.clearAll();
// })
gulp.task('cleandist', function() {
    return del('dist/**/*', { force: true })
});
gulp.task('prebuild', async function() {
    var buildCss = gulp.src('app/css/main.css')
        .pipe(cssnano())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('dist/css'))
    var buildImg = gulp.src('app/img/**')
        .pipe(gulp.dest('dist/img'))
        // var buildFonts = gulp.src('apgup/fonts/**/*') // Переносим шрифты в продакшен
        //     .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
        .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src(['app/**/*.html', '!app/template/**/*']) // Переносим HTML в продакшен
        .pipe(buildssi({ root: 'app/' }))
        .pipe(gulp.dest('dist'))

});

// gulp.task('buildcopy', function() {
//     return gulp.src([
//             '{app/js,app/css}/*.min.*'
//             // 'app/img/dist/**/*',
//             // 'app/fonts/**/*'
//         ], { base: 'app/' })
//         .pipe(dest('dist'))
// });
// gulp.task('cleandist', function() {
//     return del('dist/**/*', { force: true })
// });
// gulp.task('buildhtml', function() {
//     return gulp.src(['app/**/*.html', '!app/template/**/*'])
//         .pipe(buildssi({ root: 'app/' }))
//         .pipe(dest('dist'))
// });

// function cleandist() {
//     return del('dist/**/*', { force: true })
// }

// function buildhtml() {
//     return src(['app/**/*.html', '!app/template/**/*'])
//         .pipe(buildssi({ root: 'app/' }))
//         .pipe(dest('dist'))
// }

// function buildcopy() {
//     return src([
//             '{app/js,app/css}/*.min.*',
//             'app/img/dist/**/*',
//             'app/fonts/**/*'
//         ], { base: 'app' })
//         .pipe(dest('dist'))
// }
gulp.task('watch', function() {
    gulp.watch('app/sass/*.+(scss|sass)', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/template/*.html', gulp.parallel('blockcode')); // Наблюдение за HTML файлами в корне проекта
    // gulp.watch('app/templates/*.html', gulp.parallel('rigg')); // Наблюдение за HTML файлами в корне проекта
    gulp.watch(['app/js/common.js', 'app/libs/**/*.js'], gulp.parallel('scripts')); // Наблюдение за главным JS файлом и за библиотеками
});
gulp.task('default', gulp.parallel('sass', 'scripts', 'browser-sync', 'watch'));

gulp.task('build', gulp.parallel('cleandist', 'prebuild'));

// exports.build = series(cleandist,scripts)