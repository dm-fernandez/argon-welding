import del from 'del';
import config from '../gulpfile.config';

const taskClean = () => del(config.dist.root);

export default taskClean;
