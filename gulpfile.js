'use strict';

// Load all dependencies
// -----------------------------------------------------------------------
var $    = require('gulp-load-plugins')();
var cfg  = require('./config.json');
var del  = require('del');
var gulp = require('gulp');
var path = require('path');
var pkg  = require('./package.json');

// Delete everything in static folder
// -----------------------------------------------------------------------
gulp.task('clean', function() {
    return del(cfg.clean, {
        dot: true
    });
});

// Process CSS files
// -----------------------------------------------------------------------
gulp.task('css', function() {
    return gulp.src(cfg.css.src)
        .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
        .pipe($.sass({
            precision: 10,
            includePaths: require('node-normalize-scss').includePaths
        }))
        .pipe($.autoprefixer(cfg.autoprefixer))
        .pipe(gulp.dest(cfg.css.dest))
        .pipe($.cssnano())
        .pipe($.rename({suffix: '.min'}))
        .pipe($.size({title: 'css', showFiles: true}))
        .pipe(gulp.dest(cfg.css.dest));
});

// Optimize images
// -----------------------------------------------------------------------
gulp.task('img', function() {
    return gulp.src(cfg.img.src)
        .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
        .pipe($.changed(cfg.img.dest))
        .pipe($.imagemin({interlaced: true, progressive: true}))
        .pipe($.size({title: 'img', showFiles: true}))
        .pipe(gulp.dest(cfg.img.dest));
});

// Process all JS files
// -----------------------------------------------------------------------
gulp.task('js', function() {
    return gulp.src(cfg.js.src)
        .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
        .pipe($.cached('js'))
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError())
        .pipe($.remember('js'))
        .pipe($.concat('app.js'))
        .pipe(gulp.dest(cfg.js.dest))
        .pipe($.uglify({preserveComments: 'some'}))
        .pipe($.rename({suffix: '.min'}))
        .pipe($.size({title: 'js', showFiles: true}))
        .pipe(gulp.dest(cfg.js.dest));
});

// Run browser-sync and watch files
// -----------------------------------------------------------------------
gulp.task('watch', function() {
    gulp.watch(cfg.css.src, ['css']);

    gulp.watch(cfg.img.src, ['img']).on('change', function (e) {
        if (e.type === 'deleted') {
            var filePathFromSrc = path.relative(path.resolve('src/img'), e.path);
            var destFilePath = path.resolve(cfg.img.dest, filePathFromSrc);

            del.sync(destFilePath);
        }
    });

    gulp.watch(cfg.js.src, ['js']).on('change', function(e) {
        if (e.type === 'deleted') {
            delete $.cached.caches.js[e.path];
            $.remember.forget('js', e.path);
        }
    });
});

// Build everything
// -----------------------------------------------------------------------
gulp.task('build', ['css', 'js', 'img'], function() {
  return gulp.src('static/**/*').pipe($.size({title: 'build'}));
});

// Default task
// -----------------------------------------------------------------------
gulp.task('default', ['clean'], () => {
    gulp.start('build');
});
