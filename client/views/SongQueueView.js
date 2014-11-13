// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({


  initialize: function() {
    this.render();
    this.collection.bind("add", function(e){
      this.render();
    },this);
    this.collection.bind("remove", function(e){
      this.render();
    },this);
    // this.collection.on('add', alert('something'), this);
  },

  render: function() {
   this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },

  renderQueuedSong: function(song) {
    var songView = new SongQueueEntryView({model: song});
    var rendered = songView.render();
    this.$el.append(rendered);
  }

});
