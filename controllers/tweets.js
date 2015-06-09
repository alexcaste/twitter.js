Twitter.TweetsController = Ember.Controller.extend({
  clicked: false,
  sortProperties: ['date'],
  tweets: Ember.computed.sort('model','sortProperties'),

  actions: {
    isClicked: function() {
      this.set('clicked', !this.get('clicked'));
    },

    addReply: function(tweet) {
      tweet.comments.addObject(tweet.reply);
    }
  }
});
