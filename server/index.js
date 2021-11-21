const express = require('express');
const http = require('http');
const logger = require('./clients/log');
const SocketIo = require('./clients/socketio');
const admin = require('./routes/admin');

// Express server
const app = express();
const server = http.createServer(app);

// Start SocketIO
SocketIo(server);

app.use(express.json());

// create admin routes
app.use('/admin', admin);

// Start http server
module.exports.server = server.listen(3001, () => {
  logger.info('Server is up on port 3001');
});
