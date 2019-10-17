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
do {
  soldier2.currentCoordinates = getCoordinates();
}
while (isCoordinatesEqual(soldier2.currentCoordinates, soldier1.currentCoordinates));

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
  return Math.floor(Math.random() * 100).toFixed(0);
}
function isCoordinatesEqual(coordinates1, coordinates2) {
  return coordinates1.x == coordinates2.x && coordinates1.y == coordinates2.y;
}
