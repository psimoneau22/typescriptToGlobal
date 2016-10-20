var gulp = require('gulp'),
    systemjsBuilder = require('gulp-systemjs-builder'),
    ts = require("gulp-typescript");

gulp.task('transpile', function() {
    var tsProject = ts.createProject("tsconfig.json");
    
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('bundle', ['transpile'], function(){
    var builder = systemjsBuilder('./', './system.config.js');    

    builder.buildStatic('dist/app.js', 'dist/bundle.js', {
        minify: false,
        mangle: false,
        globalName: 'bNext' 
    })
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['bundle']);