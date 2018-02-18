var gulp = require('gulp')
    sass = require('gulp-sass')
    minifycss = require('gulp-minify-css')
    plumber = require('gulp-plumber')
    livereload = require('gulp-livereload');

var packagesToInclude = [
    './node_modules/highlight.js/lib/highlight.js'
];

gulp.task('css', function() {
    return gulp.src('src/styles/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(minifycss({advanced:false}))
        .pipe(gulp.dest('dist/stylesheets'))
        .pipe(livereload());
});

gulp.task('js', function() {
    return gulp.src(packagesToInclude)
        .pipe(gulp.dest('./dist/javascripts/'));
});

gulp.task('css-watch', function() {
    livereload.listen();
    gulp.watch('src/styles/*.scss', ['css'])
});

gulp.task('default', ['js', 'css'])
gulp.task('develop', ['css-watch', 'js'])