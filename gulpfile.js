var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var rename = require('gulp-rename');
var minify = require('gulp-minify-css');

gulp.task('vendors', function () {
  var paths = [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/zeroclipboard/dist/ZeroClipboard.js',
  ];
  return gulp.src(paths)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/theme/ringcaptcha/static/js'));
});

gulp.task('scripts', function () {
  gulp.src('design/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/theme/ringcaptcha/static/js'))
});

gulp.task('styles', function () {
  gulp.src('design/less/docs.less')
    .pipe(less({ paths: ['node_modules'] }))
    .pipe(minify({ keepSpecialComments: 0 }))
    .pipe(gulp.dest('build/theme/ringcaptcha/static/css'))
});

gulp.task('fonts', function () {
  gulp.src('node_modules/ringcaptcha-css-toolkit/fonts/*')
    .pipe(gulp.dest('build/theme/ringcaptcha/static/fonts'))
});

gulp.task('images', function () {
  gulp.src('design/images/*')
    .pipe(gulp.dest('build/theme/ringcaptcha/static/images'))
});

gulp.task('assets', function () {
  gulp.src('node_modules/zeroclipboard/dist/ZeroClipboard.swf')
    .pipe(rename('zeroclipboard.swf'))
    .pipe(gulp.dest('build/theme/ringcaptcha/static/swf'));
});

gulp.task('build', ['vendors', 'scripts', 'styles', 'fonts', 'images', 'assets']);

gulp.task('default', ['build']);
