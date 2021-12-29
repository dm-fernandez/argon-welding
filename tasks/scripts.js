import gulp from 'gulp';
import browserify from 'browserify';
import gulpIf from 'gulp-if';
import sourceMaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import vBuffer from 'vinyl-buffer';
import vSourceStream from 'vinyl-source-stream';
import config from '../gulpfile.config';

export const taskScripts = () => (
  browserify(`${config.SRC.JS}/index.js`, { debug: true })
    .transform('babelify', {
      presets: [
        '@babel/preset-env',
      ],
    })
    .bundle()
    .on('error', function browserifyError(error) {
      console.log(error.stack);
      this.emit('end');
    })
    .pipe(vSourceStream('index.js'))
    .pipe(vBuffer())
    .pipe(gulpIf(config.isDev, sourceMaps.init({
      loadMaps: true,
    })))
    .pipe(gulpIf(config.isProd, uglify()))
    .pipe(gulpIf(config.isDev, sourceMaps.write()))
    .pipe(gulp.dest(config.DIST.JS))
);

export const watchTaskScripts = () => gulp.watch(`${config.SRC.JS}/**/*.js`, taskScripts);
