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

export const bundling = gulp.series(taskClean, taskScripts);
