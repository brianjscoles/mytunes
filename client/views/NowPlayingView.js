
var NowPlayingView = Backbone.View.extend({

  initialize: function(){
    this.render();
  },

  render: function(title){
    return this.$el.html(title || 'Pick a song!');
  },

  setNowPlaying: function(song){
    //update html and re-render
    var title = song.get('title');
    this.render('Now Playing: ' + title);
  }


});
