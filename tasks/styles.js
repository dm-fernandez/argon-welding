import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import gulpIf from 'gulp-if';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import mqpacker from '@hail2u/css-mqpacker';
import sortMediaQueries from 'sort-css-media-queries';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import config from '../gulpfile.config';

const sass = gulpSass(dartSass);

export const taskStyles = () => gulp.src(config.src.styles, { sourcemaps: config.isDev })
  .pipe(plumber(notify.onError({
    title: 'SCSS',
    message: 'Error: <%= error.message %>',
  })))
  .pipe(sass({
    includePaths: ['../node_modules/'],
  }))
  .pipe(gulpIf(config.isProd, postcss([
    mqpacker({
      sort: sortMediaQueries,
    }),
    autoprefixer(),
    cssnano(),
  ])))
  .pipe(gulp.dest(config.dist.styles, { sourcemaps: config.isDev }));

export const watchTaskStyles = () => gulp.watch(config.watch.styles, taskStyles);
