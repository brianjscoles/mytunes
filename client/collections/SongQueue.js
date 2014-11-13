// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  playlist: [],

  initialize: function(){
  },

  enqueue:function(model){
    this.models.push(model);
  },

  dequeue:function(){
    return this.models.shift();
  },

  model: SongModel

});
