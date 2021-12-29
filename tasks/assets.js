import gulp from 'gulp';
import config from '../gulpfile.config';

const fonts = () => gulp.src(config.src.fonts)
  .pipe(gulp.dest(config.dist.fonts));

const favicons = () => gulp.src(config.src.favicons)
  .pipe(gulp.dest(config.dist.favicons));

const taskAssets = gulp.series(fonts, favicons);
export default taskAssets;
