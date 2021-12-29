import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import webpack from 'webpack-stream';
import config from '../gulpfile.config';

export const taskScripts = () => gulp.src(config.src.js, { sourcemaps: config.isDev })
  .pipe(plumber(notify.onError({
    title: 'JS',
    message: 'Error: <%= error.message %>',
  })))
  .pipe(webpack({
    mode: config.isProd ? 'production' : 'development',
    output: {
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
        },
      ],
    },
  }))
  .pipe(gulp.dest(config.dist.js));

export const watchTaskScripts = () => gulp.watch(config.watch.js, taskScripts);
