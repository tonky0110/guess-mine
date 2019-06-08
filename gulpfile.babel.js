import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import minifyCSS from 'gulp-csso';
import del from 'del';

sass.compiler = require('node-sass');

const paths = {
	styles: {
		src: 'assets/scss/styles.scss',
		dest: 'src/static/styles',
		watch: 'assets/scss/**/*.scss'
	}
};

function clean() {
	return del([ 'src/static' ]);
}

function styles() {
	return gulp
		.src(paths.styles.src)
		.pipe(sass())
		.pipe(
			autoprefixer({
				cascade: false
			})
		)
		.pipe(minifyCSS())
		.pipe(gulp.dest(paths.styles.dest));
}

function watchFiles() {
	gulp.watch(paths.styles.watch, styles);
}

const dev = gulp.series([ clean, styles, watchFiles ]);

export default dev;
