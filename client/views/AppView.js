// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.nowPlayingView = new NowPlayingView({model: this.model.get('currentSong')});

    this.model.on('update', function(model){
      this.playerView.setSong(model.get('currentSong'));
      this.nowPlayingView.setNowPlaying(model.get('currentSong'));
    }, this);

    //   this.listenTo('songQueue','dequeue', function(model){
    //   console.log('this triggers?');
    //   this.playerView.setSong(model.get('currentSong'));
    //   this.nowPlayingView.setNowPlaying(model.get('currentSong'));
    // }, this);
  },

  render: function(){
    return this.$el.html([
      this.nowPlayingView.$el,
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
