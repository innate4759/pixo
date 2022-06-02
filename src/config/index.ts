import { join } from 'path';
import { NODE_ENV } from './bootstrap';
import { ApplicationConfig } from './bootstrap/env-type';

const {version} = require('../../package.json');
export const rootDir = join(__dirname, '..');

console.log(`@@@@@@@@@\n[ ${process.env.NODE_ENV} ]\n@@@@@@@@@@@`)

export const isProduction = process.env.NODE_ENV === 'production';
export const isMaster = process.env.NODE_APP_INSTANCE === '0' || process.env.NODE_APP_INSTANCE === undefined;
export const isTest = NODE_ENV === 'test';

const applicationConfig: Partial<ApplicationConfig> = {
  ...require(`./env.${NODE_ENV}`),
}

export const config: Partial<ApplicationConfig> = {
  ...applicationConfig,
  version,
  rootDir,
};
