import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import changed from 'gulp-changed';
import config from '../gulpfile.config';

export const taskImages = () => gulp.src(config.src.img)
  .pipe(plumber(notify.onError({
    title: 'IMG',
    message: 'Error: <%= error.message %>',
  })))
  .pipe(changed(config.dist.img))
  .pipe(gulp.dest(config.dist.img));

export const watchTaskImages = () => gulp.watch(config.watch.img, taskImages);
