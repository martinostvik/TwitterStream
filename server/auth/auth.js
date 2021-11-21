const logger = require('../clients/log');
// TODO: This is a stub, implement real authentication
function ensureAuthenticated(req, res, next) {
  logger.info('authorized admin access');
  next();
}
module.exports = ensureAuthenticated;
