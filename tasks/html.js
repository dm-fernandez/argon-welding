import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import gulpIf from 'gulp-if';
import config from '../gulpfile.config';

export const taskHtml = () => gulp.src(`${config.SRC.HTML}`)
  .pipe(gulpIf(config.IsProd, htmlmin({
    collapseWhitespace: true,
    removeComments: true,
  })))
  .pipe(gulp.dest(config.DIST.HTML));

export const watchTaskHtml = () => gulp.watch(`${config.SRC.HTML}`, taskHtml);
