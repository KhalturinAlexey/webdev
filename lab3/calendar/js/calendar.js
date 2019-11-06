window.onload = function() {
  var button = document.querySelector('.switch-theme-button');
  var calendar = document.querySelector('.calendar');
  button.onclick = function() {
    calendar.classList.toggle('dark');
  }

  var currentDate = new Date();

  var currentMonthElement = document.querySelector('.calendar-header .current-month');
  currentMonthElement.innerHTML = currentDate.toLocaleString('en', { month: 'long' });

  var currentYearElement = document.querySelector('.calendar-header .current-year');
  currentYearElement.innerHTML = currentDate.getFullYear();

  var currentDateCell = Array
    .from(document.querySelectorAll('.grid-cell .day'))
    .find(date => date.innerHTML == currentDate.getDate());
  if (currentDateCell != undefined) {
    currentDateCell.classList.add('today');
  }
}
