// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    console.log("i am " + this.get('title') + " and i'm supposed to play now!");
    this.trigger('play', this);
    this.set('playCount', (this.get('playCount')+1));

  },

  enqueue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);

  },

  dequeue: function(){
    this.trigger('play', this);
  },

  finished: function(){
    console.log("I am " + this.get('title') + "and i just finished playing");
    this.trigger('finished',this);
  },

  playCount: 0


});


