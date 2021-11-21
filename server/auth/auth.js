const logger = require('../clients/log');
// TODO: This is a stub, implement real authentication
module.exports.ensureAuthenticated = function(req, res, next) {
  logger.info("authorized admin access")
  next();
}
