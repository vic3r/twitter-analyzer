const router = require('express').Router();
const getTwitts = require('../twitterInfo');
const nlp = require('../nlp');

router.route('/status')
  .get( async (req, res) => {
    const screenName = req.query.screen_name;
    if(!screenName) {
      res.send("Provide a screen name")
    }

    let timeLine = await getTwitts(screenName);

    if(!timeLine) {
      res.json({"status":"not-found"});
      return;
    }
    const tweets = timeLine.map((timeLine) => `DATE: ${timeLine.created_at} -> USER: ${timeLine.user.name}: ${timeLine.text} => TOKENS: [${nlp(timeLine.text)}]`);

    res.json(tweets);
  });

module.exports = router;
