var gulp = require('gulp');
var concat = require('gulp-concat');

var paths = {
    vendor: [
        'static/components/jquery/dist/jquery.min.js',
        'static/components/angular/angular.min.js',
        'static/components/bootstrap/dist/js/bootstrap.min.js',
        'static/components/angular-ui-router/release/angular-ui-router.min.js',
        'static/components/angular-resource/angular-resource.min.js',
        'static/components/angular-bootstrap/ui-bootstrap-tpls.min.js',

    ],
    app_views: [
        'frontend/app/views/*.html'
    ],
    app_js: [
        'frontend/app/app.js',
        'frontend/app/routes.js',
        'frontend/app/controllers/**/*.js',
        'frontend/app/services/**/*.js'
    ],
};


gulp.task('vendor', function () {
    return gulp.src(paths.vendor)
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('static/compiled/'));
});

gulp.task('app_js', function () {
    return gulp.src(paths.app_js)
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('static/compiled/'));
});

gulp.task('app_views', function() {
    return gulp.src(paths.app_views)
        .pipe(gulp.dest('static/views/'));
});

gulp.watch('frontend/**/*', ['vendor', 'app_js', 'app_views']);

gulp.task('default', ['vendor', 'app_js', 'app_views']);
