window.onload = function () {

      var listingElements = ['apple', 'orange'];
      var storeElements = [];
   
      function addToStoreElements(element) {
        var elementPosition = listingElements.indexOf(element);
        if (elementPosition > -1) {
          storeElements.push(element);
          listingElements.splice(elementPosition, 1);
        }
      }

      function deleteElementFromListing(element) {
        var elementPosition = listingElements.indexOf(element);
        if (elementPosition > -1) {
          listingElements.splice(elementPosition, 1);
        }
      }

      function deleteElementFromStore(element) {
        var elementPosition = storeElements.indexOf(element);
        if (elementPosition > -1) {
          storeElements.splice(elementPosition, 1);
        }
      }

      function clearListingElements() {
        listingElements = [];
      }

      function clearStoreElements() {
        storeElements = [];
      }

      function sortStoreElements() {
        storeElements.sort();
      }

      function createToListingElement() {
        var element = prompt("Введите название элемента");
        if (element)
        {
            listingElements.push(element);
        }
      }
   
      function updateUI() {
          var storeSelect = document.querySelector('.store-select');
          var listingSelect = document.querySelector('.listing-select');
          storeSelect.innerHTML = '';
          listingSelect.innerHTML = '';
      
      for (var i = 0; i < listingElements.length; i++) {
        var newOption = document.createElement('option');
        newOption.innerText = listingElements[i];
        listingSelect.append(newOption);
      }
      
      for (var i = 0; i < storeElements.length; i++) {
        var newOption = document.createElement('option');
        newOption.innerText = storeElements[i];
        storeSelect.append(newOption);
      }
      }
  
      var addButton = document.querySelector('#add-button');
      var deleteFromListingButton = document.querySelector('#delete-listing-button');
      var deleteFromStoreButton = document.querySelector('#delete-store-button');
      var clearListingButton = document.querySelector('#clear-listing-button');
      var clearStoreButton = document.querySelector('#clear-store-button');
      var createButton = document.querySelector('#create-button');
      var sortStoreButton = document.querySelector('#sort-store-button');
    
    addButton.onclick = function () {
      var selectedOption = document.querySelector('.listing-select option:checked');
      addToStoreElements(selectedOption.innerText);
      updateUI();
    }

    deleteFromListingButton.onclick = function () {
      var selectedOption = document.querySelector('.listing-select option:checked');
      deleteElementFromListing(selectedOption.innerText);
      updateUI();
    }
    
    deleteFromStoreButton.onclick = function () {
      var selectedOption = document.querySelector('.store-select option:checked');
      deleteElementFromStore(selectedOption.innerText);
      updateUI();
    }

    clearListingButton.onclick = function () {
      clearListingElements();
      updateUI();
    }

    clearStoreButton.onclick = function () {
      clearStoreElements();
      updateUI();
    }

    sortStoreButton.onclick = function () {
      sortStoreElements();
      updateUI();
    }

    createButton.onclick = function () {
      createToListingElement();
      updateUI();
    }
  };