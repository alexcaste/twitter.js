Twitter.TweetController = Ember.Controller.extend({
  actions: {
    tweet: function() {
      var tweet = text;
      var newTweet = {text: tweet.value};
      tweets.addObject(newTweet);
    }
  }
});
