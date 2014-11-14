// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    console.log(this.get('currentSong'));

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    params.library.on('play', function(song){
      console.log("now playing " + song.get('title'));

      //set current song to the one that just reported a "play" event
      this.set('currentSong', song);
      this.trigger('update',this);
    }, this);
    console.log(this.get('songQueue'));

    this.get('songQueue').on('play', function(song){
      console.log("now playing " + song.get('title'));

      //set current song to the one that just reported a "play" event
      this.set('currentSong', song);
      this.trigger('update',this);
    }, this);


    // this.model.on('update', function(model){
    //   this.playerView.setSong(model.get('currentSong'));
    //   this.nowPlayingView.setNowPlaying(model.get('currentSong'));
    // }, this);

    params.library.on('enqueue', function(song){
      console.log("AppModel requests enqueue of " + song.get('title'));

      //enqueue the song that just reported an "enqueue" event
      this.get('songQueue').enqueue(song.clone()); console.log(this.get('songQueue'));
      if(this.get('currentSong').get('title')===undefined){
        this.set('currentSong',this.get('songQueue').dequeue());
      }

    }, this);

    params.library.on('finished', function(song){
      console.log("AppModel knows that " + song.get('title') + " has finished... dequeueing next song.");
      //dequeue and play next song
      if(this.get('songQueue').length>0){
        this.set('currentSong',this.get('songQueue').dequeue());
      }else{
        this.set('currentSong', new SongModel());
      }

    }, this);
  }


});
