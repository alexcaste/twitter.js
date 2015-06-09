Twitter.TweetsController = Ember.Controller.extend({
  sortProperties: ['date'],
  tweets: Ember.computed.sort('model','sortProperties'),

  actions: {
    addReply: function(tweet) {
      tweet.comments.addObject(tweet.reply);
    }
  }
});
