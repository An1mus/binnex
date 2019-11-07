import { isProd } from '../helpers';

const host = isProd() ? 'prodhost' : 'http://localhost:8888/' ;

const LOGIN_URL = `${host}/login`;

export default {LOGIN_URL};

