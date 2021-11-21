const express = require('express');

const router = express.Router();
const authentication = require('../auth/auth');
const twitter = require('../clients/twitter');

// middleware that is specific to this router
router.use(authentication.ensureAuthenticated);

router.post('/updateSearchTerm', (req, res) => {
  const { searchTerm } = req.body;
  res.status(200).send({ searchTerm });
  twitter.searchTerm = searchTerm;
  twitter.stopStream();
  twitter.startStream();
});

module.exports = router;
