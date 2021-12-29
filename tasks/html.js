import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import htmlmin from 'gulp-htmlmin';
import gulpIf from 'gulp-if';
import config from '../gulpfile.config';

export const taskHtml = () => gulp.src(config.src.html)
  .pipe(plumber(notify.onError({
    title: 'HTML',
    message: 'Error: <%= error.message %>',
  })))
  .pipe(gulpIf(config.isProd, htmlmin({
    collapseWhitespace: true,
    removeComments: true,
  })))
  .pipe(gulp.dest(config.dist.html));

export const watchTaskHtml = () => gulp.watch(config.watch.html, taskHtml);
