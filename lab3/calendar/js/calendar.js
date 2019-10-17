window.onload = function() {
  var button = document.querySelector('.switch-theme-button');
  var calendar = document.querySelector('.calendar');
  button.onclick = function() {
    calendar.classList.toggle('dark');
  }

  var currentDay = new Date().getDate();
  var currentDateCell = Array
    .from(document.querySelectorAll('.grid-cell .day'))
    .find(date => date.innerHTML == currentDay);
  if (currentDateCell != undefined) {
    currentDateCell.classList.add('today');
  }
}
