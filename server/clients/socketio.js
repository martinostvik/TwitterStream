const logger = require('./log');
const configs = require('../configs');
const twitter = require('./twitter');

function closeConnection(io) {
  return () => {
    logger.info('Client disconnected.');
    if (io.engine.clientsCount === 0) {
      twitter.stopStream();
    }
  };
}

function newConnection(io) {
  return (socket) => {
    logger.info('Client connected.');
    twitter.startStream();
    io.emit('searchTerm', twitter.searchTerm);
    socket.on('disconnect', closeConnection(io));
  };
}

function create(server) {
  const io = require('socket.io')(server, configs.ioConfig);
  twitter.io = io;
  io.on('connection', newConnection(io));
}

module.exports = create;
