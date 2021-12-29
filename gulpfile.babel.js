import gulp from 'gulp';
import taskClean from './tasks/clean';
import taskAssets from './tasks/assets';
import { taskImages, watchTaskImages } from './tasks/images';
import { taskHtml, watchTaskHtml } from './tasks/html';
import { taskStyles, watchTaskStyles } from './tasks/styles';
import { taskScripts, watchTaskScripts } from './tasks/scripts';
import server from './tasks/server';
import config from './gulpfile.config';

config.setEnv();

export const build = gulp.series(
  taskClean,
  taskAssets,
  taskImages,
  taskHtml,
  taskStyles,
  taskScripts,
);

export const serve = gulp.series(
  build,
  gulp.parallel(
    server,
    watchTaskHtml,
    watchTaskScripts,
    watchTaskStyles,
    watchTaskImages,
  ),
);

// gulp-replace gulp-terser gulp-gzip gulp-hash-filename yargs gulpif gulp-newer gulp-debug
// import inject from 'gulp-inject';
// import rename from 'gulp-rename';
// import notify from 'gulp-notify';
// import plumber from 'gulp-plumber';
// import sourceMaps from 'gulp-sourcemaps';
// import postcss from 'gulp-postcss';
// import replace from 'gulp-replace';
