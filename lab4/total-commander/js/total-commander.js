var arrowLeftKeyCode = 37;
var arrowUpKeyCode = 38;
var arrowRightKeyCode = 39;
var arrowDownKeyCode = 40;

function addClass(element, className) {
  if (element && !element.classList.contains(className)) {
    element.classList.add(className);
  }
}

window.onload = function() {
  var leftPanel = document.querySelector('.panel-left');
  var rightPanel = document.querySelector('.panel-right');

  var leftPanelItems = document.querySelectorAll('.panel-left .row');
  var rightPanelItems = document.querySelectorAll('.panel-right .row');

  var leftPanelSelectedIndex = 0;
  var rightPanelSelectedIndex = 0;

  document.onkeydown = function checkKey(e) {
    switch (e.keyCode) {
      case arrowLeftKeyCode:
        rightPanel.classList.remove('selected');
        rightPanelItems.forEach(item => item.classList.remove('selected'));
        addClass(leftPanel, 'selected');
        addClass(leftPanelItems[leftPanelSelectedIndex], 'selected');
        break;
      case arrowUpKeyCode:
        break;
      case arrowRightKeyCode:
          leftPanel.classList.remove('selected');
          leftPanelItems.forEach(item => item.classList.remove('selected'));
          addClass(rightPanel, 'selected');
          addClass(rightPanelItems[rightPanelSelectedIndex], 'selected');
        break;
      case arrowDownKeyCode:
        break;
  
      default:
        break;
    }
  }
}

