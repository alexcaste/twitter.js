Twitter.ApplicationController = Ember.ArrayController.extend({
  actions: {
    tweet: function() {
      var newTweet = this.get('text');
      if (newTweet.length > 141) {
        alert("141 characters or less, please.");
        return;
      }
      var date = new Date();
      tweets.addObject ({
        text: newTweet,
        date: date,
        comments:[]
      });
      this.set('text');
    }
  }
});
