var tracks = ['song1.mp3', 'song2.mp3', 'song3.mp3', 'song4.mp3']

var Player = {
    track: tracks[0],
    status: 'pause',
    display: function() {
      return 'Track: ' + this.track + ' Status: ' + this.status;
    },
    play: function() {
      this.status = 'play';
    },
    pause: function() {
      this.status = 'pause';
    },
    next: function() {
      var index = tracks.indexOf(this.track);
      if (index != -1)
      {
        ++index;
        if(typeof tracks[index] === 'undefined') {
          this.track = tracks[0];
        }
        else {
          this.track = tracks[index];
        }
      }
      else
      {
        this.track = tracks[0];
      }
    },
    prev: function() {
      var index = tracks.indexOf(this.track);
      if (index != -1)
      {
        --index;
        if(typeof tracks[index] === 'undefined') {
          this.track = tracks[tracks.length - 1];
        }
        else {
          this.track = tracks[index];
        }
      }
      else
      {
        this.track = tracks[0];
      }
    }
  };
   
  //Player.display();