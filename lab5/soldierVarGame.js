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

var isFirstSoldierTurn = true;
setInterval(function() {
  var currentSolider;
  var otherSolider;
  if (isFirstSoldierTurn) {
    currentSolider = soldier1;
    otherSolider = soldier2;
  } else {
    currentSolider = soldier2;
    otherSolider = soldier1;
  }

  var shotCoordinates = getCoordinates();
  while (isCoordinatesEqual(shotCoordinates, currentSolider.currentCoordinates)) {
    shotCoordinates = getCoordinates();
  }
  currentSolider.shot(shotCoordinates.x, shotCoordinates.y);
  if (isCoordinatesEqual(shotCoordinates, otherSolider.currentCoordinates)) {
    otherSolider.health -= 25;
    if (otherSolider.health == 0) {
      console.log(currentSolider.name + ' win! ' + otherSolider.name + ' lost!');
    }
  }

  isFirstSoldierTurn = !isFirstSoldierTurn;
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
