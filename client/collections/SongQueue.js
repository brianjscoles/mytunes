// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({


  initialize: function(){
  },

  // add:function(model){
    // this.models.push(model);

  // },


  enqueue:function(model){
    this.add(model);

  },

  dequeue:function(){
    var nextSong = this.at(0);
    this.remove(this.at(0));
    if(nextSong){
      nextSong.play();
      return nextSong;
    }
  },


  model: SongModel

});
