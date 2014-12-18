var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var watch = require('gulp-watch');

var JS_LIB = [
    "src/frontend/js/lib/jquery-1.11.1.js",
    "src/frontend/js/lib/hammer.js",
    "src/frontend/js/lib/angular.js",
    "src/frontend/js/lib/angular-animate.js",
    "src/frontend/js/lib/angular-aria.js",
    "src/frontend/js/lib/angular-material.js"
];

var JS_APP = [
    "src/frontend/js/app/__package.js",
    "src/frontend/js/app/models/**/*.js",
    "src/frontend/js/app/directives/**/*.js",
    "src/frontend/js/app/services/**/*.js",
    "src/frontend/js/app/controllers/**/*.js",
    "src/frontend/js/app/app.js"
];

var CSS = [
    ""
];

gulp.task('static', function(){
    return gulp.src('src/frontend/**/*.html').
            pipe(gulp.dest('build/frontend'))
});

gulp.task('js/lib', function(){
    return gulp.src(JS_LIB).
            pipe(concat('lib.js')).
            pipe(gulp.dest('build/frontend/js/'));
});

gulp.task('js/app', function(){
    return gulp.src(JS_APP).
        pipe(concat('app.js')).
        pipe(gulp.dest('build/frontend/js/'));
});

gulp.task('css/lib', function(){
    return gulp.src('src/frontend/css/*.css').
            pipe(concat('lib_styles.css')).
            pipe(gulp.dest('build/frontend/css'));
});

gulp.task('css/less', function(){
    return gulp.src('src/frontend/css/*.less').
        pipe(less()).
        pipe(concat('app_styles.css')).
        pipe(gulp.dest('build/frontend/css'));
});

gulp.task('img', function(){
    return gulp.src('src/frontend/img/**/*.*').
        pipe(gulp.dest('build/frontend/img'));
});

gulp.task('full',['static', 'js/lib', 'js/app', 'css/lib', 'css/less', 'img']);

gulp.task('default', function(){
    watch('src/frontend/**/*.*', function(){
        gulp.start('static');
        gulp.start('js/lib');
        gulp.start('js/app');
        gulp.start('css/lib');
        gulp.start('css/less');
        gulp.start('img');
    });
});