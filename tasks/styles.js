import gulp from 'gulp';
import plumber from 'gulp-plumber';
import gulpIf from 'gulp-if';
import sourceMaps from 'gulp-sourcemaps';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import mqpacker from '@hail2u/css-mqpacker';
import sortMediaQueries from 'sort-css-media-queries';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import config from '../gulpfile.config';

const sass = gulpSass(dartSass);

export const taskStyles = () => gulp.src(`${config.SRC.STYLES}/main.scss`, { sourcemaps: config.isDev })
  .pipe(plumber())
  .pipe(gulpIf(config.isDev, sourceMaps.init()))
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
  .pipe(gulpIf(config.isDev, sourceMaps.write()))
  .pipe(gulp.dest(config.DIST.STYLES, { sourcemaps: config.isDev }));

export const watchTaskStyles = () => gulp.watch(`${config.SRC.STYLES}/**/*.scss`, taskStyles);
