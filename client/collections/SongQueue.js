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
    return this.models.shift();
  },

  model: SongModel

});
