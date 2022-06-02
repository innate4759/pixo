import { EXT, ROOT_DIR } from './bootstrap';
import { join } from 'path';
import { loggerConfig } from './logger';
import { IndexCtrl } from '../controllers/pages/IndexController';
import { ApplicationConfig, SecurityConfig, SessionConfig } from './bootstrap/env-type';

const {version} = require('../../package.json');
const rootDir = join(__dirname, '..');


const config: Partial<ApplicationConfig> = {
    version,
    rootDir,
    logger: loggerConfig,
    acceptMimes: ['application/json'],
    mount: {
        '/api': `${ROOT_DIR}/controllers/(rest|auth)/**/*.${EXT}`,
        '/': [
            IndexCtrl
        ]
    },
    swagger: [
        {
            path: '/api-docs',
            specVersion: '3.0.1'
        }
    ],
    views: {
        root: `${rootDir}/views`,
        viewEngine: 'ejs',
        extensions: {
            ejs: 'ejs'
        }
    },
    exclude: [
        '**/*.spec.ts'
    ],
};

export = config
