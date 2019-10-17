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

soldier1.currentCoordinates = getCoordinates();
soldier2.currentCoordinates = getCoordinates();

setInterval(function() {
  var shotCoordinates = getCoordinates();
  soldier1.shot(shotCoordinates.x, shotCoordinates.y);
}, 1000);

function getCoordinates() {
  return {
    x: getRandomValue(),
    y: getRandomValue()
  }
}
function getRandomValue() {
  return Math.floor(Math.random() * 100);
}
