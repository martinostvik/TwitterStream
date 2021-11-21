const twitter = require('./twitter');
const TwitMock = require('./mocks/twit');
const IoMock = require('./mocks/io');

twitter.t = TwitMock;
twitter.io = IoMock;

test('New instance should not be streaming', () => {
  expect(twitter.isStreaming).toBe(false);
  expect(twitter.stream).toBe(null);
});

test('Instance should be streaming on startStream', () => {
  twitter.startStream();
  expect(twitter.isStreaming).toBe(true);
});

test('Instance should not be streaming on stopStream', () => {
  twitter.startStream(() => {});
  expect(twitter.isStreaming).toBe(true);
  twitter.stopStream();
  expect(twitter.isStreaming).toBe(false);
});
