const client = require('./client');
const rp = require('request-promise');

const getTimeLine = (screenName) => {
  const params = {screen_name:screenName};
  return client.get('statuses/user_timeline', params)
    .then((tweets) => {
      return tweets;
    })
    .catch((error) => {
      // TODO:Handle error
    });
};

module.exports = getTimeLine;
