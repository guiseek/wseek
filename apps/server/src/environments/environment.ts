export const environment = {
  production: false,
  app: {
    host: 'localhost',
    port: 3333,
    domain: 'http://ubuntu.gui'
  },
  mongo: {
    uri: 'mongodb://ubuntu.gui:27017/wseek',
    // uri: 'mongodb://localhost:27017/wseek'
  },
  auth: {
    secret: 'superSecret!',
    expired: '12h',
    salt: 10
  },
  swagger: {
    title: 'SeekServer NestJS Auth Base',
    description: 'Auth API Documentation',
    version: '1.0.0',
    contact: {
      name: 'Gui Seek',
      url: 'https://seek.dev.br',
      email: 'guiseek@gmail.com'
    },
    servers: []
  }
};
