var soldier1 = {
  name: 'Soldier1',
  health: 100,
  currentCoordinates: { x: 10, y: 20 },
  shot: function(x, y) {
    console.log(x, y);
  }
};
var soldier2 = {
  name: 'Soldier2',
  health: 100,
  currentCoordinates: { x: 10, y: 20 },
  shot: function(x, y) {
    console.log(x, y);
  }
};

soldier1.currentCoordinates.x = Math.floor(Math.random() * 100);
soldier1.currentCoordinates.y = Math.floor(Math.random() * 100);

soldier2.currentCoordinates.x = Math.floor(Math.random() * 100);
soldier2.currentCoordinates.y = Math.floor(Math.random() * 100);

setInterval(function() {
  // todo: spawn 2 soldiers

  var shotX = Math.floor(Math.random() * 100);
  var shotY = Math.floor(Math.random() * 100);
  soldier1.shot(shotX, shotY);
}, 1000);
