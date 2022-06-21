const winston = require('winston');

// custom errorlogger
const errorLogger = winston.createLogger({
    transports: [
      new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error'
      })
    ]
  });

// custom info logger
const infoLogger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: 'logs/info.log',
      level: 'info'
    })
  ]
});

module.exports = {errorLogger, infoLogger}