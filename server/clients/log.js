const winston = require('winston');

const consoleTransport = new winston.transports.Console();
const winstonOptions = {
  transports: [consoleTransport],
};

module.exports = winston.createLogger(winstonOptions);
