var gulp = require("gulp");
var watch = require("gulp-watch");
//only importing in create method
var browserSync = require("browser-sync").create();

gulp.task("watch", function(){
	browserSync.init({
		notify: false, //turns of notification of web page update (optional)
		server: {
			baseDir: "app"
		}
	})
	watch("./app/index.html", function(){
		//gulp.start("html");
		browserSync.reload();
	});

	//** means any future hypothetical folders
	watch("./app/assets/styles/**/*.css", function(){
		gulp.start("cssInject");
	});

	watch('./app/assets/scripts/**/*.js', function(){
		gulp.start("scriptsRefresh");
	});
});


//In [] are dependencies that gulp must run first.
gulp.task("cssInject", ["styles"], function(){
	return gulp.src("./app/temp/styles/styles.css")
	.pipe(browserSync.stream());
});

gulp.task("scriptsRefresh", ["scripts"], function(){
	browserSync.reload();
});