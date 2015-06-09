Twitter.Router.map(function() {
  this.resource('tweets', {path: '/'});
  this.resource('application', function(){
    this.resource('tweet');
  });
});
