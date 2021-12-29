const SRC_PATH = 'src';
const DIST_PATH = 'dist';

const config = {
  SRC: {
    ROOT: SRC_PATH,
    HTML: `${SRC_PATH}/*.html`,
    STYLES: `${SRC_PATH}/styles`,
    JS: `${SRC_PATH}/js`,
    IMG: `${SRC_PATH}/img/**/*.{jpg,png,svg}`,
    FONTS: `${SRC_PATH}/fonts/*.{woff,woff2}`,
    FAVICONS: `${SRC_PATH}/favicons/*.*`,
  },
  DIST: {
    ROOT: DIST_PATH,
    HTML: DIST_PATH,
    STYLES: `${DIST_PATH}/styles`,
    JS: `${DIST_PATH}/js`,
    IMG: `${DIST_PATH}/img`,
    FONTS: `${DIST_PATH}/fonts`,
    FAVICONS: `${DIST_PATH}/favicons`,
  },
  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
