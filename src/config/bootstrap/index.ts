import * as RootPath from 'app-root-path';
export enum ProfileTypes {
    PROD = 'production',
    DEV = 'development',
    TEST = 'test',
    STAGE = 'stage',
}

export const NODE_ENV = (process.env.NODE_ENV = process.env.NODE_ENV || ProfileTypes.DEV) as ProfileTypes;

export const INIT_CWD = process.env.INIT_CWD;

export const IS_RAN_BY_NODE = (process.env.npm_lifecycle_script || '').indexOf('src/index.ts') <= -1;

export const IS_TESTING = process.env.JEST_WORKER_ID !== undefined;

export const EXT = (IS_RAN_BY_NODE && !IS_TESTING) ? 'js' : '{ts,js}';

export const ROOT_DIR = IS_RAN_BY_NODE && !IS_TESTING ? `${RootPath.path}/dist` : `${RootPath.path}/src`;


