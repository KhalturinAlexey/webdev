var ARROW_LEFT_KEY_CODE = 37;
var ARROW_UP_KEY_CODE = 38;
var ARROW_RIGHT_KEY_CODE = 39;
var ARROW_DOWN_KEY_CODE = 40;

function select(element) {
  if (element && !element.classList.contains("selected")) {
    element.classList.add("selected");
  }
}

window.onload = function() {
  var leftPanelItems = Array.from(
    document.querySelectorAll(".panel-left .row")
  );
  var rightPanelItems = Array.from(
    document.querySelectorAll(".panel-right .row")
  );
  rightPanelItems.pop();
  var isLeftPanelSelected = true;

  var leftPanelSelectedIndex = 0;
  var rightPanelSelectedIndex = 0;

  select(leftPanelItems[0]);

  document.onkeydown = function checkKey(e) {
    if (
      e.keyCode == ARROW_LEFT_KEY_CODE ||
      e.keyCode == ARROW_UP_KEY_CODE ||
      e.keyCode == ARROW_RIGHT_KEY_CODE ||
      e.keyCode == ARROW_DOWN_KEY_CODE
    ) {
      var selection = document.querySelectorAll(".selected");
      selection.forEach(element => element.classList.remove("selected"));
    }

    switch (e.keyCode) {
      case ARROW_LEFT_KEY_CODE:
        isLeftPanelSelected = true;
        select(leftPanelItems[leftPanelSelectedIndex]);
        break;
      case ARROW_UP_KEY_CODE:
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
      case ARROW_RIGHT_KEY_CODE:
        isLeftPanelSelected = false;
        select(rightPanelItems[rightPanelSelectedIndex]);
        break;
      case ARROW_DOWN_KEY_CODE:
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
