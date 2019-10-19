var arrowLeftKeyCode = 37;
var arrowUpKeyCode = 38;
var arrowRightKeyCode = 39;
var arrowDownKeyCode = 40;

function select(element) {
  if (element && !element.classList.contains('selected')) {
    element.classList.add('selected');
  }
}

function clearSelection() {
  var selection = document.querySelectorAll('.selected');
  selection.forEach(element => element.classList.remove('selected'));
}

window.onload = function() {
  var leftPanelItems = document.querySelectorAll('.panel-left .row');
  var rightPanelItems = document.querySelectorAll('.panel-right .row');

  var leftPanelSelectedIndex = 0;
  var rightPanelSelectedIndex = 0;

  select(leftPanelItems[0]);

  document.onkeydown = function checkKey(e) {
    switch (e.keyCode) {
      case arrowLeftKeyCode:
        clearSelection();
        select(leftPanelItems[leftPanelSelectedIndex]);
        break;
      case arrowUpKeyCode:
        break;
      case arrowRightKeyCode:
        clearSelection();
        select(rightPanelItems[rightPanelSelectedIndex]);
        break;
      case arrowDownKeyCode:
        break;
      default:
        break;
    }
  }
}
