
var gulp = require("gulp"),
    clean = require("gulp-clean"),
    uglify = require("gulp-uglify"),
    connect = require("gulp-connect");

gulp.task("serve", function() {
    return connect.server({
        port: 4040
    });
});

gulp.task("clean", function() {
    return gulp.src("dist", { read: false })
        .pipe(clean())
});

gulp.task("minify", function() {
    return gulp.src("src/lazyscrollload.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
})

gulp.task("copy", function() {
    return gulp.src("src/lodash.custom.min.js")
        .pipe(gulp.dest("dist"))
})

gulp.task("build", ["clean", "minify", "copy"], function() {

});