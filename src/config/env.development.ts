import { EXT,  ROOT_DIR } from './bootstrap';
import env from './env';
import { ApplicationConfig, MainConnectionOptions, RedisConfig, } from './bootstrap/env-type';
import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';


const httpPort = 8092;

const rdbmsConfig: MainConnectionOptions = {
    type: 'mysql',
    name: 'default',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database:'pixo',
    logging: ['query', 'schema', 'log', 'info', 'error'],
    synchronize: false,
    namingStrategy: new SnakeNamingStrategy(),
    bigNumberStrings: false,
    entities: [`${ROOT_DIR}/entities/**/*.${EXT}`],
    migrations: [`${ROOT_DIR}/migrations/**/*.${EXT}`],
};

const typeorm: ConnectionOptions[] = [];
typeorm.push(rdbmsConfig, ...(env.typeorm || []));


const config: Partial<ApplicationConfig> = {
    ...env,
    httpPort: httpPort,
    typeorm,
    rdbms: rdbmsConfig,
};


export = config
