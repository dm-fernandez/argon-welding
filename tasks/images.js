import gulp from 'gulp';
import changed from 'gulp-changed';
import config from '../gulpfile.config';

export const taskImages = () => gulp.src(`${config.SRC.IMG}`)
  .pipe(changed(config.DIST.IMG))
  .pipe(gulp.dest(config.DIST.IMG));

export const watchTaskImages = () => gulp.watch(`${config.SRC.IMG}`, taskImages);
