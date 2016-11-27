var gulp = require('gulp'),
	watch = require('gulp-watch'),
	connect = require('gulp-connect'),
	linvereload = require('gulp-livereload'),
	prefixer = require('gulp-autoprefixer'),
	rigger = require('gulp-rigger'),
	cssnano = require('gulp-cssnano'),
	less = require('gulp-less'),
	rimraf = require('rimraf'),
	rename = require('gulp-rename'),
	spriteCreator = require('gulp.spritesmith'),
	notify = require("gulp-notify"),
	imagemin = require('gulp-imagemin');



gulp.task('sprite', function () {
	var sprite = gulp.src('src/img/icons/*.png')
		.pipe(spriteCreator({
			imgName: '../img/sprite.png',
			cssName: 'sprite.less',
			cssFormat: 'less',
			algorithm: 'binary-tree',
			padding: 10
		}))
		sprite.img.pipe(rename('sprite.png')).pipe(gulp.dest('build/img'));
		sprite.css.pipe(gulp.dest('src/less/imports/'));
});

gulp.task('css', function () {
	gulp.src('src/less/style.less') // Выберем наш style.less
		.pipe(less()) // Скомпилируем
		.pipe(prefixer()) // Добавим вендорные префиксы
		.pipe(gulp.dest('build/css/'))
		.pipe(rename('minify.css'))
		.pipe(cssnano({
			zindex: false
		})) // Сожмем
		.pipe(gulp.dest('build/css/'))
		.pipe(connect.reload()); // Переместим в build
});
gulp.task('bootstrap', function () {
	gulp.src('bootstrap/less/bootstrap.less') // Выберем наш style.less
		.pipe(less()) // Скомпилируем
		.pipe(prefixer()) // Добавим вендорные префиксы
		.pipe(gulp.dest('build/css/'))
		.pipe(rename('minify.css'))
		.pipe(cssnano({
			zindex: false
		})) // Сожмем
		.pipe(gulp.dest('build/css/'))
		.pipe(connect.reload()); // Переместим в build
});

gulp.task('html', function () {
	gulp.src('src/*.html') // Выберем файлы по нужному пути
		.pipe(rigger()) // Прогоним через rigger
		.pipe(gulp.dest('build/'))
		.pipe(connect.reload());
	// Переместим их в папку build
});

gulp.task('js', function () {
	gulp.src('src/js/**/*.js')
		.pipe(gulp.dest('build/js/'))
		.pipe(connect.reload());
});
gulp.task('reset', function () {
	gulp.src('src/less/reset.css')
		.pipe(gulp.dest('build/css/'))
});

gulp.task('image', function () {
	gulp.src('src/img/**/*.*') // Выберем наши картинки
		.pipe(imagemin({ // Сожмем их
			progressive: true,
			svgoPlugins: [{
				removeViewBox: false
			}],
			interlaced: true
		}))
		.pipe(gulp.dest('build/img/'))
		.pipe(connect.reload());
	// Переместим в build
});

gulp.task('fonts', function () {
	gulp.src('src/fonts/**/*.*')
		.pipe(gulp.dest('build/fonts/'))
		.pipe(connect.reload());
	// Переместим шрифты в build
});
gulp.task('awesome', function () {
	gulp.src('src/fonts/font-awesome/')
		.pipe(gulp.dest('build/fonts/'))
		.pipe(connect.reload());
});
gulp.task('clean', function (cb) {
	rimraf('build/', cb);
});

gulp.task('server', function(){
		connect.server({
			root : 'build',
			livereload: true
		});
});

gulp.task('build', [
    'html',
    'css',
    'fonts',
    'image',
    'sprite',
    'reset',
    'bootstrap',
    'js',
    'awesome'
]);

gulp.task('watch', function () {
	gulp.start('html', 'css', 'image', 'fonts', 'sprite', 'bootstrap', 'server');

	gulp.watch(['src/**/*.html'], function (event, cb) {
		gulp.start('html');
	});
	gulp.watch(['./**/*.less'], function (event, cb) {
		gulp.start('css');
	});
	gulp.watch(['src/img/**/*.*'], function (event, cb) {
		gulp.start('image');
	});
	gulp.watch(['src/fonts/'], function (event, cb) {
		gulp.start('fonts');
	});
	gulp.watch(['src/img/icons/**/*.png'], function (event, cb) {
		gulp.start('sprite');
	});
	gulp.watch(['src/less/reset.css'], function (event, cb) {
		gulp.start('reset');
	});
	gulp.watch(['bootstrap/less/**/*.less'], function (event, cb) {
		gulp.start('bootstrap');
	});
	gulp.watch(['src/js/**/*.js'], function (event, cb) {
		gulp.start('js');
	});
});










