
var gulp = require("gulp"), connect = require("gulp-connect");

gulp.task("serve", function () {
    return connect.server({
        port: 4040
    });
});

