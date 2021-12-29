import del from 'del';
import config from '../gulpfile.config';

const taskClean = () => del(config.DIST.ROOT);

export default taskClean;
