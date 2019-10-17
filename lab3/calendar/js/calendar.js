window.onload = function() {
  var button = document.querySelector('.switch-theme-button');
  var calendar = document.querySelector('.calendar');
  button.onclick = function() {
    calendar.classList.toggle('dark');
  }
}
