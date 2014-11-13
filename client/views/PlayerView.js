// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    var _this = this;
    this.el.addEventListener("ended", function() { 
      _this.model.finished();
    }, this)
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    this.$el.addClass('player');
    
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});

