const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const maps = require("gulp-sourcemaps");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

function styles() {
    return gulp.src("./src/styles/main.scss")
        .pipe(maps.init())
        .pipe( sass({ outputStyle: "compressed" }) )
        .pipe(gulp.dest("./dist/css"));
}

function minificaImagem() {
    return gulp.src("./src/images/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/images/"));
}

function scripts() {
    return gulp.src("./src/scripts/main.js")
        .pipe(uglify())
        .pipe(gulp.dest("./dist/scripts"));
}

exports.default = gulp.parallel([styles, minificaImagem, scripts]);
exports.watch = function() {
    gulp.watch("./*.html", gulp.parallel(styles, minificaImagem, scripts));
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
    gulp.watch("./src/images/**/*", gulp.parallel(minificaImagem));
    gulp.watch("./src/scripts/*", gulp.parallel(scripts));
}
