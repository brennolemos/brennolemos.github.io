// Adiciona os módulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// Função para compilar o SASS e adicionar os prefixos
function compilaSass() {
  return gulp.src('css/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

// Tarefa de Gulp para a função de SASS
gulp.task('sass', compilaSass);

// Função para juntar o JS
function gulpJS() {
  return gulp.src('js/main/*.js')
    .pipe(concat('main.min.js'))
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}

gulp.task('mainjs', gulpJS);

// JS Plugins
function pluginJS() {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    // 'node_modules/@glidejs/glide/dist/glide.min.js'
  ])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream())
}

gulp.task('pluginjs', pluginJS);

// Função para iniciar o browser
function browser() {
  browserSync.init({
    baseDir: '/'
  });
}

// Tarefa para iniciar o browser-sync
gulp.task('browser-sync', browser);

// Função de watch do gulp
function watch() {
  gulp.watch('css/scss/*.scss', compilaSass);
  gulp.watch('js/main/*.js', gulpJS);
  gulp.watch(['*.html', '*.php']).on('change', browserSync.reload);
}

// Inicia a tarefa de watch
gulp.task('watch', watch);

// Tarefa padrão do gulp, que inicia o watch e o browser-sync
gulp.task('default', gulp.parallel('watch', 'sass', 'pluginjs', 'mainjs'));