import * as rc from 'rc';
import { ConnectionOptions } from 'typeorm';

export interface ServiceConfig {
  database: ConnectionOptions;
  server: {
    worker: number;
    task: number;
    performance: number;
  };
  minio: any;
}

const defaultConfig: ServiceConfig = {
  database: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'database',
  },
  server: {
    worker: 7001,
    task: 7002,
    performance: 7003,
  },
  minio: {
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: 'minioadmin',
    secretKey: 'minioadmin',
  },
};

export const config: ServiceConfig = rc('tm', defaultConfig);
