import browserSync from 'browser-sync';
import config from '../gulpfile.config';

const server = () => {
  browserSync.create().init({
    server: {
      baseDir: config.dist.root,
    },
    files: [
      `${config.dist.html}/*.html`,
      `${config.dist.styles}/**/*.css`,
      `${config.dist.js}/**/*.js`,
      {
        match: `${config.dist.img}/**/*.{jpg,png,svg}`,
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
