const StreamMock = require('./stream');

class TwitMock {
  static stream() {
    return StreamMock;
  }
}

module.exports = TwitMock;
