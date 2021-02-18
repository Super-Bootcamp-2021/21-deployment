const rc = require('rc');

const defaultConfig = {
  database: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'masdimya',
    password: '1234567890',
    database: 'sanbercode2',
  },
  storage: {
    endPoint: '192.168.0.8',
    port: 9000,
    useSSL: false,
    accessKey: 'minioadmin',
    secretKey: 'minioadmin',
  },
  bus: {
    url: 'localhost',
    port: 4222,
  },
  kv: {
    host: 'localhost',
    port: 6379,
  },
  server: {
    taskPort: 7002,
    workerPort: 7001,
    performancePort: 7003,
  },
};

const config = rc('tm', defaultConfig);

module.exports = {
  config,
};
