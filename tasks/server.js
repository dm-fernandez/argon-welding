import browserSync from 'browser-sync';
import config from '../gulpfile.config';

const server = () => {
  browserSync.create().init({
    server: {
      baseDir: config.DIST.ROOT,
    },
    files: [
      `${config.DIST.HTML}/*.html`,
      `${config.DIST.STYLES}/**/*.css`,
      `${config.DIST.JS}/**/*.js`,
      {
        match: `${config.DIST.IMG}/**/*.*`,
        fn() {
          this.reload();
        },
      },
    ],
    ui: false,
    port: 8080,
    notify: false,
  });
};

export default server;
