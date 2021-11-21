const express = require('express');
const authentication = require('../auth/auth');
const twitter = require('../clients/twitter');

const router = express.Router();

// middleware that is specific to this router
router.use(authentication);

router.post('/updateSearchTerm', (req, res) => {
  const { searchTerm } = req.body;
  res.status(200).send({ searchTerm });
  twitter.searchTerm = searchTerm;
  twitter.stopStream();
  twitter.startStream();
});

module.exports = router;
