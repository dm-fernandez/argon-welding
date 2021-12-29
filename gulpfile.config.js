const SRC_PATH = 'src';
const DIST_PATH = 'dist';

const config = {
  src: {
    root: SRC_PATH,
    html: `${SRC_PATH}/*.html`,
    styles: `${SRC_PATH}/styles/main.scss`,
    js: `${SRC_PATH}/js/index.js`,
    img: `${SRC_PATH}/img/**/*.{jpg,png,svg}`,
    fonts: `${SRC_PATH}/fonts/*.{woff,woff2}`,
    favicons: `${SRC_PATH}/favicons/*.*`,
  },
  dist: {
    root: DIST_PATH,
    html: DIST_PATH,
    styles: `${DIST_PATH}/styles`,
    js: `${DIST_PATH}/js`,
    img: `${DIST_PATH}/img`,
    fonts: `${DIST_PATH}/fonts`,
    favicons: `${DIST_PATH}/favicons`,
  },
  watch: {
    html: `${SRC_PATH}/*.html`,
    styles: `${SRC_PATH}/styles/**/*.scss`,
    js: `${SRC_PATH}/js/**/*.js`,
    img: `${SRC_PATH}/img/**/*.{jpg,png,svg}`,
  },
  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
