import gulp from 'gulp';
import config from '../gulpfile.config';

const fonts = () => gulp.src(`${config.SRC.FONTS}`)
  .pipe(gulp.dest(config.DIST.FONTS));

const favicons = () => gulp.src(`${config.SRC.FAVICONS}`)
  .pipe(gulp.dest(config.DIST.FAVICONS));

const taskAssets = gulp.series(fonts, favicons);
export default taskAssets;
