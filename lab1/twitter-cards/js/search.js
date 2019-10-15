// handling the Enter key
document.querySelector('#search').addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    startSearch();
  }
});

// start search function
function startSearch() {
  var searchFieldValue = document.getElementById('search').value; // get input string
  searchFieldValue = searchFieldValue.toLowerCase();

  var cardsContent = document.getElementsByClassName('content'); // get all cards
  var cardCount = cardsContent.length; // get card count
  
  for (var i = 0; i < cardCount; i++) {
    var card = cardsContent[i];
    var cardText = card.innerText.toLowerCase();

    var displayStyle = (searchFieldValue == '') || (cardText.indexOf(searchFieldValue) >= 0) ? 'block' : 'none'; //тернарный оператор 
    document.getElementsByClassName('column')[i].style.display = displayStyle;
  }
}
