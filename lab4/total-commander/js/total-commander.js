var arrowLeftKeyCode = 37;
var arrowUpKeyCode = 38;
var arrowRightKeyCode = 39;
var arrowDownKeyCode = 40;

function select(element) {
  if (element && !element.classList.contains("selected")) {
    element.classList.add("selected");
  }
}

window.onload = function() {
  var leftPanelItems = document.querySelectorAll(".panel-left .row");
  var rightPanelItems = document.querySelectorAll(".panel-right .row");
  var isLeftPanelSelected = true;

  var leftPanelSelectedIndex = 0;
  var rightPanelSelectedIndex = 0;

  select(leftPanelItems[0]);

  document.onkeydown = function checkKey(e) {
    if (
      e.keyCode == arrowLeftKeyCode ||
      e.keyCode == arrowUpKeyCode ||
      e.keyCode == arrowRightKeyCode ||
      e.keyCode == arrowDownKeyCode
    ) {
      var selection = document.querySelectorAll(".selected");
      selection.forEach(element => element.classList.remove("selected"));
    }

    switch (e.keyCode) {
      case arrowLeftKeyCode:
        isLeftPanelSelected = true;
        select(leftPanelItems[leftPanelSelectedIndex]);
        break;
      case arrowUpKeyCode:
        if (isLeftPanelSelected && leftPanelSelectedIndex > 0) {
          leftPanelSelectedIndex--;
        } else if (!isLeftPanelSelected && rightPanelSelectedIndex > 0) {
          rightPanelSelectedIndex--;
        }
        select(
          isLeftPanelSelected
            ? leftPanelItems[leftPanelSelectedIndex]
            : rightPanelItems[rightPanelSelectedIndex]
        );
        break;
      case arrowRightKeyCode:
        isLeftPanelSelected = false;
        select(rightPanelItems[rightPanelSelectedIndex]);
        break;
      case arrowDownKeyCode:
        if (
          isLeftPanelSelected &&
          leftPanelSelectedIndex < leftPanelItems.length - 1
        ) {
          leftPanelSelectedIndex++;
        } else if (
          !isLeftPanelSelected &&
          rightPanelSelectedIndex < rightPanelItems.length - 1
        ) {
          rightPanelSelectedIndex++;
        }
        select(
          isLeftPanelSelected
            ? leftPanelItems[leftPanelSelectedIndex]
            : rightPanelItems[rightPanelSelectedIndex]
        );
        break;
      default:
        break;
    }
  };
};
