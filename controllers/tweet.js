Twitter.TweetController = Ember.ArrayController.extend({
  actions: {
    tweet: function() {
      var newTweet = this.get('text');
      tweets.addObject ({
        text: newTweet,
        date: new Date(),
        date_value: new Date().getTime(),
        comment:[]
      });
        this.set('text');
    }
  }
});


// var tweet = text;
// var newTweet = {text: tweet.value};
