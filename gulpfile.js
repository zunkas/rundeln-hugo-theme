var gulp = require("gulp"),
    sass = require("gulp-sass"),
    uglify = require("gulp-uglify");


gulp.task("scss", function (){
  return gulp.src("src/scss/**/*.scss")
    .pipe(sass(
      {outputStyle: "compressed"
    }))
    .pipe(gulp.dest("static/css"))
    .pipe(gulp.dest("../../static/css"))
})

gulp.task("default", gulp.series("scss"));  