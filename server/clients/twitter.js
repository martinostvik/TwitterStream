const Twit = require('twit');
const logger = require('./log');
const { twitterConfig } = require('../configs');

class Twitter {
  constructor(config) {
    this.t = new Twit(config);
    this.stream = null;
    this.isStreaming = false;
    this.searchTerm = 'js';
    this.io = null;
  }

  startStream() {
    if (this.isStreaming) {
      logger.info('Stream already exists.');
    } else {
      logger.info('Creating new Twitter stream.');
      this.stream = this.t.stream('statuses/filter', { track: this.searchTerm });
      this.stream.on('tweet', (tweet) => {
        this.io.emit('newTweet', tweet);
      });
      this.isStreaming = true;
    }
    this.io.emit('searchTerm', this.searchTerm);
  }

  stopStream() {
    logger.info('Stopping Twitter stream.');
    this.stream.stop();
    this.isStreaming = false;
  }
}

module.exports = new Twitter(twitterConfig);
